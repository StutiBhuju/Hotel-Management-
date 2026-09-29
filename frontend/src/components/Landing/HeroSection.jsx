import {
  FiArrowRight,
  FiCalendar,
  FiUsers,
  FiMapPin,
} from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Emerald Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-32 pt-32 sm:px-8 lg:px-10">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-secondary" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-secondary-light">
              Welcome to Grand Haven
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Stay Somewhere
            <span className="block text-secondary-light">
              Extraordinary.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Discover thoughtfully designed rooms, exceptional hospitality,
            and unforgettable experiences—all in one place.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-xl"
            >
              Find Your Room

              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#rooms"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-foreground"
            >
              Explore Rooms
            </a>
          </div>

        </div>
      </div>

      {/* Booking Card */}
      <div
        id="booking"
        className="absolute bottom-20 left-1/2 z-20 w-[calc(100%-2.5rem)] max-w-6xl -translate-x-1/2 translate-y-1/2"
      >
        <div className="rounded-2xl border border-border bg-surface p-4 shadow-2xl sm:p-5 lg:p-6">

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-end">

            {/* Location */}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <FiMapPin className="shrink-0 text-primary" size={20} />

              <div>
                <p className="text-xs font-medium text-muted">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold text-foreground">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>

            {/* Check In */}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <FiCalendar className="shrink-0 text-primary" size={20} />

              <div>
                <p className="text-xs font-medium text-muted">
                  Check In
                </p>

                <p className="mt-1 text-sm font-semibold text-foreground">
                  Select Date
                </p>
              </div>
            </div>

            {/* Check Out */}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <FiCalendar className="shrink-0 text-primary" size={20} />

              <div>
                <p className="text-xs font-medium text-muted">
                  Check Out
                </p>

                <p className="mt-1 text-sm font-semibold text-foreground">
                  Select Date
                </p>
              </div>
            </div>

            {/* Guests + Button */}
            <div className="flex gap-3">
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
                <FiUsers className="shrink-0 text-primary" size={20} />

                <div>
                  <p className="text-xs font-medium text-muted">
                    Guests
                  </p>

                  <p className="mt-1 text-sm font-semibold text-foreground">
                    2 Guests
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="flex h-full min-h-14.5 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
              >
                Search
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;