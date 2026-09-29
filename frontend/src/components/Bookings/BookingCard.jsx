import React from "react";
import {
    FiCalendar,
    FiUsers,
    FiMoon,
    FiEye,
    FiX,
} from "react-icons/fi";

const BookingCard = ({
    booking,
    onCancel,
    cancelling
}) => {

    const statusStyles = {
        pending: "bg-amber-100 text-amber-700",
        confirmed: "bg-emerald-100 text-emerald-700",
        completed: "bg-blue-100 text-blue-700",
        cancelled: "bg-red-100 text-red-700",
    };

    const statusLabel = {
        pending: "Pending",
        confirmed: "Confirmed",
        completed: "Completed",
        cancelled: "Cancelled",
    };


    return (
        <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">

            <div className="grid lg:grid-cols-[220px_1fr_auto]">


                {/* ============================
            ROOM IMAGE
        ============================ */}

                <div className="h-52 lg:h-full">

                    <img
                        src={booking.image}
                        alt={booking.roomName}
                        className="h-full w-full object-cover"
                    />

                </div>


                {/* ============================
            BOOKING CONTENT
        ============================ */}

                <div className="p-5 lg:p-6">

                    {/* Room title */}

                    <div className="flex flex-wrap items-center gap-3">

                        <h3 className="font-serif text-xl font-semibold text-foreground">
                            {booking.roomName}
                        </h3>

                        <span
                            className={`rounded-full px-3 py-1 text-[11px] font-bold ${statusStyles[booking.status]
                                }`}
                        >
                            {statusLabel[booking.status]}
                        </span>

                    </div>


                    <p className="mt-1 text-sm text-muted">
                        {booking.roomType}
                        <span className="mx-2 text-border">•</span>
                        {booking.bed}
                    </p>


                    {/* Details */}

                    <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">

                        <div>

                            <div className="flex items-center gap-2 text-muted">
                                <FiCalendar size={15} />

                                <span className="text-xs">
                                    Check-in
                                </span>
                            </div>

                            <p className="mt-1 text-sm font-semibold text-foreground">
                                {booking.checkIn}
                            </p>

                        </div>


                        <div>

                            <div className="flex items-center gap-2 text-muted">
                                <FiCalendar size={15} />

                                <span className="text-xs">
                                    Check-out
                                </span>
                            </div>

                            <p className="mt-1 text-sm font-semibold text-foreground">
                                {booking.checkOut}
                            </p>

                        </div>


                        <div>

                            <div className="flex items-center gap-2 text-muted">
                                <FiUsers size={15} />

                                <span className="text-xs">
                                    Guests
                                </span>
                            </div>

                            <p className="mt-1 text-sm font-semibold text-foreground">
                                {booking.guests} Guests
                            </p>

                        </div>


                        <div>

                            <div className="flex items-center gap-2 text-muted">
                                <FiMoon size={15} />

                                <span className="text-xs">
                                    Stay
                                </span>
                            </div>

                            <p className="mt-1 text-sm font-semibold text-foreground">
                                {booking.nights} Nights
                            </p>

                        </div>

                    </div>


                    {/* Booking ID */}

                    <div className="mt-6 text-xs text-muted">

                        Booking ID:
                        <span className="ml-1 font-semibold text-foreground">
                            {booking.id}
                        </span>

                    </div>

                </div>


                {/* ============================
            RIGHT SIDE
        ============================ */}

                <div className="flex flex-row items-center justify-between gap-5 border-t border-border p-5 lg:min-w-48 lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:p-6">


                    {/* Price */}

                    <div className="text-left lg:text-right">

                        <p className="text-xs text-muted">
                            Total Amount
                        </p>

                        <p className="mt-1 text-xl font-bold text-foreground">
                            NPR {booking.totalAmount.toLocaleString()}
                        </p>

                        <p className="mt-1 text-[11px] text-muted">
                            {booking.nights} nights
                        </p>

                    </div>


                    {/* Actions */}

                    <div className="flex gap-2 lg:w-full lg:flex-col">

                        <button
                            className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary lg:w-full"
                        >
                            <FiEye size={15} />
                            Details
                        </button>


                        {(booking.status === "pending" ||
                            booking.status === "confirmed") && (

                                <button
                                    onClick={() => onCancel(booking.id)}
                                    disabled={cancelling}
                                    className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50 lg:w-full"
                                >
                                    <FiX size={15} />

                                    {cancelling ? "Cancelling..." : "Cancel"}
                                </button>

                            )}

                    </div>

                </div>

            </div>

        </article>
    );
};

export default BookingCard;
