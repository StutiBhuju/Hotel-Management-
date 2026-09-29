
import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiCheck,
  FiMinus,
  FiPlus,
  FiUser,
  FiX,
} from "react-icons/fi";

import { CreateBooking } from "../apis/BookingApi";

const BookingDialog = ({ room, open, onClose, onSubmit }) => {

  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    phone: "",
    specialRequest: "",
  });

  const [nights, setNights] = useState(0);

  useEffect(() => {

    if (!bookingData.checkIn || !bookingData.checkOut) {
      setNights(0);
      return;
    }

    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);

    const difference = checkOut - checkIn;
    const calculatedNights = difference / (1000 * 60 * 60 * 24);

    setNights(calculatedNights > 0 ? calculatedNights : 0);

  }, [bookingData.checkIn, bookingData.checkOut]);


  /* ============================================================
     RESET FORM WHEN DIALOG OPENS
  ============================================================ */

  useEffect(() => {

    if (open) {
      setBookingData({
        checkIn: "",
        checkOut: "",
        guests: 1,
        phone: "",
        specialRequest: "",
      });

      setNights(0);
    }

  }, [open]);


  if (!open || !room) {
    return null;
  }


  /* ============================================================
     HELPERS
  ============================================================ */

  const updateField = (field, value) => {

    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));

  };


  const increaseGuests = () => {

    if (bookingData.guests < room.guests) {
      setBookingData((prev) => ({
        ...prev,
        guests: prev.guests + 1,
      }));
    }

  };


  const decreaseGuests = () => {

    if (bookingData.guests > 1) {
      setBookingData((prev) => ({
        ...prev,
        guests: prev.guests - 1,
      }));
    }

  };


  /* ============================================================
     PRICE CALCULATION
  ============================================================ */

  const subtotal = room.price * nights;

  const discount = room.discount
    ? (subtotal * room.discount) / 100
    : 0;

  const total = subtotal - discount;


  /* ============================================================
     SUBMIT
  ============================================================ */


const handleSubmit = async (e) => {

  e.preventDefault();

  const bookingDataToSend = {
    room_id: room.id,
    check_in: bookingData.checkIn,
    check_out: bookingData.checkOut,
    guests: bookingData.guests,
    phone: bookingData.phone,
    special_request: bookingData.specialRequest,
  };

  try {

    const data = await CreateBooking(bookingDataToSend);

    if (data.success) {

      alert("Booking request submitted successfully!");

      onClose();

    } else {

      alert(data.message || "Failed to create booking");

    }

  } catch (error) {

    console.error("Booking Error:", error);

    alert("Something went wrong while creating your booking.");

  }

};




  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {

        if (e.target === e.currentTarget) {
          onClose();
        }

      }}
    >

      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl">


        {/* ======================================================
            HEADER
        ======================================================= */}

        <div className="flex items-center justify-between border-b border-border px-6 py-5">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Reservation
            </p>

            <h2 className="mt-1 font-serif text-2xl font-semibold text-foreground">
              Book Your Stay
            </h2>

          </div>


          <button
            onClick={onClose}
            aria-label="Close booking dialog"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-foreground"
          >
            <FiX size={20} />
          </button>

        </div>


        {/* ======================================================
            CONTENT
        ======================================================= */}

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto"
        >

          <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1fr_280px]">


            {/* ==================================================
                LEFT SIDE
            =================================================== */}

            <div className="space-y-6">


              {/* Room Information */}

              <div className="flex gap-4 rounded-xl border border-border bg-background p-4">

                <img
                  src={room.image}
                  alt={room.name}
                  className="h-24 w-28 shrink-0 rounded-lg object-cover"
                />

                <div className="min-w-0">

                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {room.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    {room.type} • {room.bed}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-foreground">
                    NPR {Number(room.price).toLocaleString()}
                    <span className="ml-1 text-xs font-normal text-muted">
                      / night
                    </span>
                  </p>

                </div>

              </div>


              {/* Dates */}

              <div>

                <div className="mb-3 flex items-center gap-2">

                  <FiCalendar
                    size={18}
                    className="text-primary"
                  />

                  <h3 className="text-sm font-semibold text-foreground">
                    Select Your Dates
                  </h3>

                </div>


                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <div>

                    <label className="mb-1.5 block text-xs font-medium text-muted">
                      Check-in
                    </label>

                    <input
                      type="date"
                      required
                      value={bookingData.checkIn}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) =>
                        updateField("checkIn", e.target.value)
                      }
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    />

                  </div>


                  <div>

                    <label className="mb-1.5 block text-xs font-medium text-muted">
                      Check-out
                    </label>

                    <input
                      type="date"
                      required
                      value={bookingData.checkOut}
                      min={
                        bookingData.checkIn ||
                        new Date().toISOString().split("T")[0]
                      }
                      onChange={(e) =>
                        updateField("checkOut", e.target.value)
                      }
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    />

                  </div>

                </div>

              </div>


              {/* Guests */}

              <div>

                <div className="mb-3 flex items-center gap-2">

                  <FiUser
                    size={18}
                    className="text-primary"
                  />

                  <h3 className="text-sm font-semibold text-foreground">
                    Number of Guests
                  </h3>

                </div>


                <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">

                  <div>

                    <p className="text-sm font-medium text-foreground">
                      Guests
                    </p>

                    <p className="mt-0.5 text-xs text-muted">
                      Maximum {room.guests} guests
                    </p>

                  </div>


                  <div className="flex items-center gap-3">

                    <button
                      type="button"
                      onClick={decreaseGuests}
                      disabled={bookingData.guests <= 1}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FiMinus size={14} />
                    </button>

                    <span className="w-5 text-center text-sm font-semibold text-foreground">
                      {bookingData.guests}
                    </span>

                    <button
                      type="button"
                      onClick={increaseGuests}
                      disabled={bookingData.guests >= room.guests}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FiPlus size={14} />
                    </button>

                  </div>

                </div>

              </div>


              {/* Contact */}

              <div>

                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Contact Information
                </h3>

                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={bookingData.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary"
                />

              </div>


              {/* Special Request */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-foreground">
                  Special Request
                  <span className="ml-1 text-xs font-normal text-muted">
                    (Optional)
                  </span>
                </label>

                <textarea
                  rows={3}
                  value={bookingData.specialRequest}
                  onChange={(e) =>
                    updateField("specialRequest", e.target.value)
                  }
                  placeholder="Anything you'd like the hotel to know?"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary"
                />

              </div>

            </div>


            {/* ==================================================
                RIGHT SIDE — SUMMARY
            =================================================== */}

            <aside className="h-fit rounded-2xl border border-border bg-background p-5 lg:sticky lg:top-0">

              <h3 className="font-serif text-lg font-semibold text-foreground">
                Booking Summary
              </h3>


              <div className="mt-5 space-y-3 text-sm">

                <div className="flex justify-between gap-4">

                  <span className="text-muted">
                    Room
                  </span>

                  <span className="text-right font-medium text-foreground">
                    {room.name}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-muted">
                    Guests
                  </span>

                  <span className="font-medium text-foreground">
                    {bookingData.guests}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-muted">
                    Nights
                  </span>

                  <span className="font-medium text-foreground">
                    {nights || "—"}
                  </span>

                </div>

              </div>


              <div className="my-5 border-t border-border" />


              <div className="space-y-3 text-sm">

                <div className="flex justify-between">

                  <span className="text-muted">
                    Room × {nights || 0}
                  </span>

                  <span className="font-medium text-foreground">
                    NPR {subtotal.toLocaleString()}
                  </span>

                </div>


                {discount > 0 && (

                  <div className="flex justify-between">

                    <span className="text-muted">
                      Discount ({room.discount}%)
                    </span>

                    <span className="font-medium text-success">
                      - NPR {discount.toLocaleString()}
                    </span>

                  </div>

                )}

              </div>


              <div className="my-5 border-t border-border" />


              <div className="flex items-end justify-between gap-4">

                <span className="text-sm text-muted">
                  Total
                </span>

                <div className="text-right">

                  <p className="text-xl font-bold text-foreground">
                    NPR {total.toLocaleString()}
                  </p>

                  <p className="mt-0.5 text-[11px] text-muted">
                    {nights || 0} night{nights === 1 ? "" : "s"}
                  </p>

                </div>

              </div>


              <button
                type="submit"
                disabled={!nights}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FiCheck size={17} />
                Confirm Booking
              </button>


              <p className="mt-3 text-center text-[11px] leading-5 text-muted">
                Your booking will be sent to the hotel for confirmation.
              </p>

            </aside>

          </div>

        </form>

      </div>

    </div>
  );
};

export default BookingDialog;

