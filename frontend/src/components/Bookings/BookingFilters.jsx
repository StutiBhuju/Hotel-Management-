
import React from "react";

const BookingFilters = ({
  activeFilter,
  onFilterChange
}) => {

  const filters = [
    "All",
    "Upcoming",
    "Completed",
    "Cancelled"
  ];

  return (
    <nav className="mb-8 flex gap-1 overflow-x-auto border-b border-border scrollbar-hide">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`whitespace-nowrap border-b-2 px-5 py-3 text-sm font-medium transition ${
            activeFilter === filter
              ? "border-primary text-primary"
              : "border-transparent text-muted hover:text-primary"
          }`}
        >
          {filter}
        </button>

      ))}

    </nav>
  );
};

export default BookingFilters;

