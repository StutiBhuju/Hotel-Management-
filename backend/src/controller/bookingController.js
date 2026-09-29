import pool from "../config/db.js"

const createBooking = async (req, res) => {

    try {

        const {
            room_id,
            check_in,
            check_out,
            guests,
            phone,
            special_request
        } = req.body;


        // 1. Validate required fields

        if (!room_id || !check_in || !check_out || !guests) {

            return res.status(400).json({
                success: false,
                message: "Required booking information is missing"
            });

        }


        // 2. Get room

        const roomResult = await pool.query(
            "SELECT * FROM rooms WHERE id = $1",
            [room_id]
        );

        if (roomResult.rows.length === 0) {

            return res.status(404).json({
                success: false,
                message: "Room not found"
            });

        }

        const room = roomResult.rows[0];


        // 3. Check guest limit

        if (guests > room.guests) {

            return res.status(400).json({
                success: false,
                message: `This room allows maximum ${room.guests} guests`
            });

        }


        // 4. Calculate nights

        const checkInDate = new Date(check_in);
        const checkOutDate = new Date(check_out);

        const difference =
            checkOutDate.getTime() - checkInDate.getTime();

        const nights =
            difference / (1000 * 60 * 60 * 24);


        if (nights <= 0) {

            return res.status(400).json({
                success: false,
                message: "Check-out must be after check-in"
            });

        }


        // 5. Check room availability

        const existingBooking = await pool.query(
            `
            SELECT id
            FROM bookings
            WHERE room_id = $1
            AND status IN ('pending', 'confirmed')
            AND check_in < $3
            AND check_out > $2
            `,
            [room_id, check_in, check_out]
        );


        if (existingBooking.rows.length > 0) {

            return res.status(409).json({
                success: false,
                message: "Room is not available for these dates"
            });

        }


        // 6. Calculate price

        const subtotal = room.price * nights;

        const discount = room.discount
            ? subtotal * (room.discount / 100)
            : 0;

        const totalAmount = subtotal - discount;


        // 7. Create booking

        const booking = await pool.query(
            `
            INSERT INTO bookings (
                user_id,
                room_id,
                check_in,
                check_out,
                guests,
                phone,
                special_request,
                nights,
                total_amount,
                status
            )
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'pending')
            RETURNING *
            `,
            [
                req.user.id,
                room_id,
                check_in,
                check_out,
                guests,
                phone,
                special_request,
                nights,
                totalAmount
            ]
        );


        // 8. Response

        return res.status(201).json({
            success: true,
            message: "Booking request created successfully",
            booking: booking.rows[0]
        });


    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to create booking"
        });

    }

};

const getMyBookings = async (req, res) => {

    try {

        // User ID comes from authentication middleware
        const userId = req.user.id;


        const result = await pool.query(
            `
            SELECT
                b.id,
                b.check_in,
                b.check_out,
                b.guests,
                b.phone,
                b.special_request,
                b.nights,
                b.total_amount,
                b.status,
                b.created_at,

                r.id AS room_id,
                r.name AS room_name,
                r.type AS room_type,
                r.image AS room_image,
                r.bed,
                r.price AS room_price

            FROM bookings b

            INNER JOIN rooms r
                ON b.room_id = r.id

            WHERE b.user_id = $1

            ORDER BY b.created_at DESC
            `,
            [userId]
        );


        return res.status(200).json({

            success: true,

            bookings: result.rows

        });


    } catch (error) {

        console.error("Get My Bookings Error:", error);

        return res.status(500).json({

            success: false,

            message: "Failed to fetch bookings"

        });

    }

};

const cancelBooking = async (req, res) => {

    try {

        const userId = req.user.id;
        const bookingId = req.params.id;


        const result = await pool.query(
            `
            UPDATE bookings

            SET status = 'cancelled'

            WHERE id = $1
            AND user_id = $2
            AND status IN ('pending', 'confirmed')

            RETURNING id, status
            `,
            [bookingId, userId]
        );


        // Booking doesn't exist or doesn't belong to user
        if (result.rows.length === 0) {

            return res.status(404).json({

                success: false,

                message: "Booking not found or cannot be cancelled"

            });

        }


        return res.status(200).json({

            success: true,

            message: "Booking cancelled successfully",

            booking: result.rows[0]

        });


    } catch (error) {

        console.error("Cancel Booking Error:", error);

        return res.status(500).json({

            success: false,

            message: "Failed to cancel booking"

        });

    }

};
export { createBooking ,getMyBookings,cancelBooking}