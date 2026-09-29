import {
  FiArrowUpRight,
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const attractions = [
  {
    name: "Boudhanath Stupa",
    distance: "15 min",
    description:
      "One of Nepal's most iconic Buddhist landmarks.",
  },
  {
    name: "Pashupatinath Temple",
    distance: "12 min",
    description:
      "A sacred Hindu temple complex on the Bagmati River.",
  },
  {
    name: "Swayambhunath",
    distance: "20 min",
    description:
      "The famous hilltop temple overlooking Kathmandu.",
  },
  {
    name: "Thamel",
    distance: "10 min",
    description:
      "A lively neighborhood filled with restaurants, shops, and cafés.",
  },
];

const LocationSection = () => {
  return (
    <section className="overflow-hidden bg-surface px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-2xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-secondary" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Location
            </span>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Stay Close to
            <span className="block text-primary">
              Kathmandu's Best.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Located in the heart of Kathmandu, Grand Haven puts you within
            easy reach of the city's cultural landmarks, vibrant streets,
            and unforgettable experiences.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Real Map */}
          <div className="relative min-h-125 overflow-hidden rounded-3xl border border-border bg-background">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/MapKathmandu.png/851px-MapKathmandu.png"
              alt="Map of Kathmandu, Nepal"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Map Overlay */}
            <div className="absolute inset-0 bg-primary/10" />

            {/* Hotel Marker */}
            <div className="absolute left-[48%] top-[43%]">

              {/* Pulse */}
              <span className="absolute -inset-3 animate-ping rounded-full bg-secondary/40" />

              {/* Marker */}
              <div className="relative flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-secondary shadow-xl">
                <FiMapPin
                  size={20}
                  className="text-white"
                />
              </div>

            </div>

            {/* Location Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-black/50 p-5 shadow-xl backdrop-blur-md">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                    Grand Haven Hotel
                  </p>

                  <h3 className="mt-1 font-serif text-xl font-semibold text-white">
                    Kathmandu, Nepal
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Lazimpat, Kathmandu
                  </p>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:flex">
                  <FiNavigation size={18} />
                </div>

              </div>

            </div>

          </div>

          {/* Nearby Attractions */}
          <div className="flex flex-col justify-center">

            <div className="mb-7">
              <p className="text-sm font-semibold text-primary">
                Explore Nearby
              </p>

              <h3 className="mt-2 font-serif text-3xl font-semibold text-foreground">
                Discover Kathmandu
              </h3>
            </div>

            <div className="divide-y divide-border border-y border-border">

              {attractions.map((attraction, index) => (
                <div
                  key={attraction.name}
                  className="group flex gap-5 py-6"
                >

                  {/* Number */}
                  <span className="pt-1 text-xs font-semibold tracking-widest text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Attraction */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-4">

                      <h4 className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {attraction.name}
                      </h4>

                      <span className="shrink-0 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                        {attraction.distance}
                      </span>

                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {attraction.description}
                    </p>

                  </div>

                  <FiArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  />

                </div>
              ))}

            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Get Directions

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;