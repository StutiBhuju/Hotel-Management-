
import React, { useMemo, useState, useEffect } from "react";
import {
  FiCalendar,
  FiChevronDown,
  FiSearch,
  FiUsers,
} from "react-icons/fi";

import RoomCard from "../../components/Explore/RoomCard";
import EmptyState from "../../components/Explore/EmptyState";
import SpecialOffer from "../../components/Explore/SpecialOffer";

import { GetAllRooms } from "../../apis/ExploreApis";

import BookingDialog from "../BookingDialog";



const roomTypes = [
  "All Rooms",
  "Standard",
  "Deluxe",
  "Suite",
  "Family",
];

const ExploreRooms = () => {
  const [activeType, setActiveType] = useState("All Rooms");
  const [favorites, setFavorites] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const [searchData, setSearchData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

  useEffect(() => {

    const fetchRooms = async () => {

      const data = await GetAllRooms();

      if (data.success) {
        setRooms(data.rooms);
      }

    };

    fetchRooms();

  }, []);

  /* ============================================================
     FILTER ROOMS BY ROOM TYPE
  ============================================================ */

  const filteredRooms = useMemo(() => {
    if (activeType === "All Rooms") {
      return rooms;
    }

    return rooms.filter((room) => room.type === activeType);
  }, [activeType, rooms]);

  /* ============================================================
     FAVORITES
  ============================================================ */

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleBook = (room) => {
    setSelectedRoom(room);
    setBookingOpen(true);
  };
  return (
    <div className="min-h-full bg-background">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="mb-8">

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Find Your Stay
        </p>

        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Explore Rooms
        </h1>

        <p className="mt-2 text-base text-muted">
          Find the perfect room for your next stay.
        </p>

      </section>

      <SpecialOffer />


      {/* =====================================================
          ROOM TYPES
      ====================================================== */}

      <section className="mb-9">

        <div className="mb-4">

          <h2 className="font-serif text-xl font-semibold text-foreground">
            Popular Room Types
          </h2>

          <p className="mt-1 text-sm text-muted">
            Browse rooms based on your preferred stay.
          </p>

        </div>



        {/* Room Type Tabs */}

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

          {roomTypes.map((type) => (

            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${activeType === type
                ? "border-primary bg-primary text-white shadow-sm"
                : "border-border bg-surface text-muted hover:border-primary/40 hover:text-primary"
                }`}
            >
              {type}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          ROOMS SECTION
      ====================================================== */}

      <section>

        {/* Header */}

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {activeType === "All Rooms"
                ? "All Rooms"
                : `${activeType} Rooms`}
            </h2>

            <p className="mt-1 text-sm text-muted">
              {filteredRooms.length}{" "}
              {filteredRooms.length === 1 ? "room" : "rooms"} available
            </p>

          </div>


          {/* Sort */}

          <button className="hidden items-center gap-2 text-sm font-medium text-muted transition hover:text-primary sm:flex">

            Sort by:

            <span className="font-semibold text-foreground">
              Recommended
            </span>

            <FiChevronDown size={16} />

          </button>

        </div>


        {/* =================================================
            ROOM GRID
        ================================================== */}

        {filteredRooms.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {filteredRooms.map((room) => (

              <RoomCard
                key={room.id}
                room={room}
                favorite={favorites.includes(room.id)}
                onFavorite={() => toggleFavorite(room.id)}
                onBook={handleBook}
              />

            ))}

          </div>

        ) : (

          <EmptyState />

        )}

        <BookingDialog
          room={selectedRoom}
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
          onSubmit={(data) => {
            console.log("Final booking:", data);
          }}
        />

      </section>

    </div>
  );
};

export default ExploreRooms;

