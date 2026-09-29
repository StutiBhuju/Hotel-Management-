import { FiArrowRight, FiStar, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    type: "Deluxe",
    description:
      "A spacious retreat designed for comfort, relaxation, and a peaceful stay.",
    price: "NPR 12,500",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    guests: "2 Guests",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Executive Suite",
    type: "Suite",
    description:
      "Experience elevated comfort with a spacious living area and elegant interiors.",
    price: "NPR 18,500",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
    guests: "3 Guests",
    rating: "4.9",
  },
  {
    id: 3,
    name: "Presidential Suite",
    type: "Luxury",
    description:
      "Our finest accommodation, crafted for an exceptional and unforgettable stay.",
    price: "NPR 32,000",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
    guests: "4 Guests",
    rating: "5.0",
  },
];

const FeaturedRooms = () => {
  return (
    <section
      id="rooms"
      className="bg-background px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Rooms
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Stay in Comfort.
              <span className="block text-primary">
                Stay in Style.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              From relaxing retreats to luxurious suites, discover a room
              designed around the way you want to stay.
            </p>

          </div>

          {/* View All */}
          <Link
            to="/rooms"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View All Rooms

            <FiArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Room Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {rooms.map((room) => (
            <article
              key={room.id}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                {/* Room Type */}
                <span className="absolute left-5 top-5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
                  {room.type}
                </span>

                {/* Rating */}
                <div className="absolute bottom-5 right-5 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  <FiStar
                    size={13}
                    className="fill-secondary text-secondary"
                  />

                  {room.rating}
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {room.name}
                  </h3>

                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-primary">
                      {room.price}
                    </p>

                    <p className="text-xs text-muted">
                      / night
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {room.description}
                </p>

                {/* Guests */}
                <div className="mt-5 flex items-center gap-2 border-t border-border pt-5 text-sm text-muted">
                  <FiUsers
                    size={16}
                    className="text-primary"
                  />

                  {room.guests}
                </div>

                {/* CTA */}
                <Link
                  to={`/rooms/${room.id}`}
                  className="group/button mt-5 flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  View Room

                  <FiArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Link>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedRooms;