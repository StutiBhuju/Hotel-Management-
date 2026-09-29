import {
  FiArrowRight,

  FiHeart,
  FiShield,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const HotelExperience = () => {
  const experiences = [
    {
      icon: FiStar,
      title: "Thoughtful Hospitality",
      description: "Every detail is designed around your comfort.",
    },
    {
      icon: FiHeart,
      title: "Feel at Home",
      description: "Warm spaces and personalized service.",
    },
    {
      icon: FiShield,
      title: "Peace of Mind",
      description: "A safe, relaxing stay from arrival to departure.",
    },
  ];

  return (
    <section id="about" className="overflow-hidden bg-surface px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Visual */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative h-125 overflow-hidden rounded-3xl sm:h-150">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury hotel interior"
                className="h-full w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-border bg-surface p-5 shadow-xl sm:left-8 sm:right-auto sm:w-75">
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light">
                  <FiStar
                    size={21}
                    className="text-primary"
                  />
                </div>

                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">
                    Exceptional Stays
                  </p>

                  <p className="mt-1 text-sm text-muted">
                    Crafted for memorable moments.
                  </p>
                </div>

              </div>
            </div>

            {/* Decorative Gold Element */}
            <div className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-full border border-secondary/40 lg:block" />

          </div>

          {/* Content */}
          <div className="lg:py-8">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                The Grand Haven Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
              More Than a Stay.
              <span className="block text-primary">
                An Experience.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-muted">
              We believe a great hotel stay is about more than a beautiful
              room. It is about the feeling you get when you walk through the
              door, the little details that make your day easier, and the
              moments you remember long after you leave.
            </p>

            <p className="mt-4 text-base leading-7 text-muted">
              From peaceful mornings to relaxing evenings, every part of your
              stay is thoughtfully designed to help you slow down, recharge,
              and enjoy the moment.
            </p>

            {/* Experience Points */}
            <div className="mt-8 space-y-5">
              {experiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <div
                    key={experience.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light">
                      <Icon
                        size={18}
                        className="text-primary"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {experience.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-muted">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Discover Our Story

              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HotelExperience;