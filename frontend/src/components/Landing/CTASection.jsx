import { FiArrowRight, FiCalendar, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-4xl bg-primary">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=85')",
            }}
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-primary-dark via-primary to-primary-dark/90" />

          {/* Decorative Circles */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-secondary/20" />

          {/* Gold Accent */}
          <div className="absolute right-16 top-16 hidden h-2 w-2 rounded-full bg-secondary sm:block" />
          <div className="absolute bottom-20 right-32 hidden h-3 w-3 rounded-full bg-secondary/60 lg:block" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-secondary" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-light">
                Your Next Escape
              </span>

              <span className="h-px w-10 bg-secondary" />
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Perfect Stay
              <span className="block text-secondary-light">
                Starts Here.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Whether you're planning a peaceful getaway, a business trip,
              or a special celebration, we're ready to make your stay
              unforgettable.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <FiCheck
                  size={16}
                  className="text-secondary-light"
                />
                Best available rates
              </div>

              <div className="flex items-center gap-2 text-sm text-white/80">
                <FiCheck
                  size={16}
                  className="text-secondary-light"
                />
                Easy booking
              </div>

              <div className="flex items-center gap-2 text-sm text-white/80">
                <FiCheck
                  size={16}
                  className="text-secondary-light"
                />
                Exceptional service
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/rooms"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl sm:w-auto"
              >
                <FiCalendar size={17} />

                Book Your Stay

                <FiArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="w-full rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-primary sm:w-auto"
              >
                Contact Us
              </Link>

            </div>

            {/* Small Note */}
            <p className="mt-6 text-xs text-white/50">
              No hidden fees · Secure booking · Instant confirmation
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;