import {
  FiCoffee,
  FiHeart,
  FiMapPin,
  FiShield,
  FiStar,
  FiSun,
  FiWifi,
} from "react-icons/fi";

const amenities = [
  {
    icon: FiWifi,
    title: "Free Wi-Fi",
    description: "Stay connected with fast and reliable internet throughout the hotel.",
  },
  {
    icon: FiSun,
    title: "Swimming Pool",
    description: "Take a refreshing break in our relaxing outdoor pool.",
  },
  {
    icon: FiCoffee,
    title: "Restaurant",
    description: "Enjoy delicious local and international cuisine prepared by our chefs.",
  },
  {
    icon: FiHeart,
    title: "Spa & Wellness",
    description: "Relax, recharge, and take some time for yourself.",
  },
  {
    icon: FiMapPin,
    title: "Free Parking",
    description: "Convenient and secure parking for our guests.",
  },
  {
    icon: FiShield,
    title: "24/7 Security",
    description: "Your safety and peace of mind are always our priority.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="amenities" className="bg-background px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-secondary" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Hotel Amenities
            </span>

            <span className="h-px w-10 bg-secondary" />
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Everything You Need
            <span className="block text-primary">
              Under One Roof.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted">
            From relaxing moments to everyday essentials, enjoy thoughtful
            amenities designed to make your stay comfortable and convenient.
          </p>

        </div>

        {/* Amenities */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">

          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;

            return (
              <div
                key={amenity.title}
                className="group bg-surface p-7 transition-colors duration-300 hover:bg-primary-light/40 sm:p-8"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon
                    size={21}
                    className="text-primary transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {amenity.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {amenity.description}
                </p>

                {/* Decorative Number */}
                <div className="mt-6 text-xs font-semibold tracking-widest text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-surface px-6 py-6 sm:flex-row sm:px-8">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-light">
              <FiStar
                size={17}
                className="text-secondary"
              />
            </div>

            <p className="text-sm font-medium text-foreground">
              Everything you need for a comfortable stay.
            </p>
          </div>

          <p className="text-sm text-muted">
            Designed with you in mind.
          </p>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;