import React, { useEffect, useMemo, useState } from "react";

import BookingStats from "../components/Bookings/BookingStats";
import BookingFilters from "../components/Bookings/BookingFilters";
import BookingCard from "../components/Bookings/BookingCard";

import {
  GetMyBookings,
  CancelBooking
} from "../apis/BookingApi";


const MyBookings = () => {

  const [activeFilter, setActiveFilter] = useState("All");

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [cancellingId, setCancellingId] = useState(null);


  /* ============================
     FETCH USER BOOKINGS
  ============================ */

  useEffect(() => {

    const fetchBookings = async () => {

      try {

        setLoading(true);

        const data = await GetMyBookings();


        if (data.success) {

          const formattedBookings = data.bookings.map((booking) => ({

            id: booking.id,

            roomId: booking.room_id,

            roomName: booking.room_name,

            roomType: booking.room_type,

            bed: booking.bed,

            image: booking.room_image,

            checkIn: booking.check_in,

            checkOut: booking.check_out,

            guests: booking.guests,

            nights: booking.nights,

            totalAmount: Number(booking.total_amount),

            status: booking.status,

            bookingDate: booking.created_at,

            phone: booking.phone,

            specialRequest: booking.special_request

          }));


          setBookings(formattedBookings);

        } else {

          setError(
            data.message || "Failed to load bookings"
          );

        }

      } catch (err) {

        console.error("Booking Fetch Error:", err);

        setError(
          "Something went wrong while loading bookings."
        );

      } finally {

        setLoading(false);

      }

    };


    fetchBookings();

  }, []);


  /* ============================
     CANCEL BOOKING
  ============================ */

  const handleCancel = async (bookingId) => {

    try {

      setCancellingId(bookingId);


      const data = await CancelBooking(bookingId);


      if (data.success) {

        /*
          Update only the cancelled booking
          in the local state.

          We don't need to fetch all bookings again.
        */

        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.id === bookingId
              ? {
                  ...booking,
                  status: "cancelled"
                }
              : booking
          )
        );


        console.log("Booking cancelled successfully");

      } else {

        alert(
          data.message || "Failed to cancel booking"
        );

      }

    } catch (error) {

      console.error("Cancel Booking Error:", error);

      alert("Something went wrong while cancelling the booking.");

    } finally {

      setCancellingId(null);

    }

  };


  /* ============================
     FILTER BOOKINGS
  ============================ */

  const filteredBookings = useMemo(() => {

    if (activeFilter === "All") {

      return bookings;

    }


    if (activeFilter === "Upcoming") {

      return bookings.filter(
        (booking) =>
          booking.status === "pending" ||
          booking.status === "confirmed"
      );

    }


    return bookings.filter(
      (booking) =>
        booking.status.toLowerCase() ===
        activeFilter.toLowerCase()
    );

  }, [activeFilter, bookings]);


  /* ============================
     BOOKING STATS
  ============================ */

  const stats = useMemo(() => {

    return {

      total: bookings.length,

      upcoming: bookings.filter(
        (booking) =>
          booking.status === "pending" ||
          booking.status === "confirmed"
      ).length,

      completed: bookings.filter(
        (booking) =>
          booking.status === "completed"
      ).length,

      cancelled: bookings.filter(
        (booking) =>
          booking.status === "cancelled"
      ).length

    };

  }, [bookings]);


  /* ============================
     LOADING STATE
  ============================ */

  if (loading) {

    return (
      <div className="min-h-full bg-background">

        <section className="mb-8">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Your Stay
          </p>

          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            My Bookings
          </h1>

        </section>


        <div className="flex min-h-75 items-center justify-center">

          <div className="text-sm text-muted">
            Loading your bookings...
          </div>

        </div>

      </div>
    );

  }


  /* ============================
     ERROR STATE
  ============================ */

  if (error) {

    return (
      <div className="min-h-full bg-background">

        <section className="mb-8">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Your Stay
          </p>

          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            My Bookings
          </h1>

        </section>


        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center">

          <h3 className="font-serif text-xl font-semibold text-red-700">
            Unable to load bookings
          </h3>

          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>

        </div>

      </div>
    );

  }


  return (

    <div className="min-h-full bg-background">


      {/* ============================
          HEADER
      ============================ */}

      <section className="mb-8">

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Your Stay
        </p>

        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          My Bookings
        </h1>

        <p className="mt-2 text-base text-muted">
          Manage your reservations and keep track of your stays.
        </p>

      </section>


      {/* ============================
          STATS
      ============================ */}

      <BookingStats
        stats={stats}
      />


      {/* ============================
          FILTERS
      ============================ */}

      <BookingFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />


      {/* ============================
          RESERVATIONS
      ============================ */}

      <section>

        <div className="mb-5">

          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Your Reservations
          </h2>

          <p className="mt-1 text-sm text-muted">

            {filteredBookings.length}{" "}

            {filteredBookings.length === 1
              ? "reservation"
              : "reservations"}

          </p>

        </div>


        {/* ============================
            BOOKINGS
        ============================ */}

        {filteredBookings.length > 0 ? (

          <div className="space-y-5">

            {filteredBookings.map((booking) => (

              <BookingCard
                key={booking.id}
                booking={booking}

                onCancel={handleCancel}

                cancelling={
                  cancellingId === booking.id
                }
              />

            ))}

          </div>

        ) : (

          <div className="rounded-2xl border border-border bg-surface px-6 py-16 text-center">

            <h3 className="font-serif text-xl font-semibold text-foreground">
              No bookings found
            </h3>

            <p className="mt-2 text-sm text-muted">
              You don't have any{" "}
              {activeFilter.toLowerCase()} bookings.
            </p>

          </div>

        )}

      </section>

    </div>

  );

};


export default MyBookings;

