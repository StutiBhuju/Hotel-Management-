
import React from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from "react-icons/fi";

const BookingStats = ({ stats }) => {

  const items = [
    {
      label: "Total Bookings",
      value: stats.total,
      icon: FiCalendar,
    },
    {
      label: "Upcoming",
      value: stats.upcoming,
      icon: FiClock,
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: FiCheckCircle,
    },
    {
      label: "Cancelled",
      value: stats.cancelled,
      icon: FiXCircle,
    },
  ];

  return (
    <section className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

      {items.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-md"
          >

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Icon size={19} />
            </div>

            <p className="text-2xl font-bold text-foreground">
              {item.value}
            </p>

            <p className="mt-1 text-xs font-medium text-muted">
              {item.label}
            </p>

          </div>
        );

      })}

    </section>
  );
};

export default BookingStats;
