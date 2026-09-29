import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

import Logo from "../Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10 bg-primary-dark text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="max-w-sm">

            {/* Logo */}
            <div className="[&_h1]:text-white [&_p]:text-white/50 [&_div:first-child]:bg-white/10">
              <Logo />
            </div>

            <p className="mt-6 text-sm leading-7 text-white/60">
              A place where thoughtful hospitality, elegant spaces, and
              unforgettable experiences come together. Your comfort is our
              priority.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
              >
                <FiFacebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
              >
                <FiTwitter size={17} />
              </a>

            </div>

          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="/"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/rooms"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  Rooms & Suites
                </a>
              </li>

              <li>
                <a
                  href="/amenities"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  Amenities
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Guest Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Guest Services
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="/booking"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  Book a Room
                </a>
              </li>

              <li>
                <a
                  href="/my-bookings"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  My Bookings
                </a>
              </li>

              <li>
                <a
                  href="/faq"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="/support"
                  className="text-sm text-white/60 transition-colors hover:text-secondary-light"
                >
                  Guest Support
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Address */}
              <div className="flex gap-3">
                <FiMapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-secondary"
                />

                <p className="text-sm leading-6 text-white/60">
                  Lazimpat,
                  <br />
                  Kathmandu, Nepal
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+9771234567890"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-secondary-light"
              >
                <FiPhone
                  size={17}
                  className="shrink-0 text-secondary"
                />

                +977 1 234 5678
              </a>

              {/* Email */}
              <a
                href="mailto:hello@grandhaven.com"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-secondary-light"
              >
                <FiMail
                  size={17}
                  className="shrink-0 text-secondary"
                />

                hello@grandhaven.com
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/40">
            © {year} Grand Haven Hotel & Resort. All rights reserved.
          </p>

          {/* Policies */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">

            <a
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-secondary-light"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-secondary-light"
            >
              Terms & Conditions
            </a>

            <a
              href="/cancellation"
              className="text-xs text-white/40 transition-colors hover:text-secondary-light"
            >
              Cancellation Policy
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Gold Accent */}
      <div className="h-1 bg-secondary" />

    </footer>
  );
};

export default Footer;