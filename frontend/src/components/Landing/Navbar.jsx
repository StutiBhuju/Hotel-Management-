
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiArrowRight,
} from "react-icons/fi";

import Logo from "../Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Rooms", path: "#rooms" },
    { name: "Amenities", path: "#amenities" },
    { name: "About Us", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Logo onClick={closeMenu} />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/login"
            className="px-3 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
          >
            Login
          </Link>

          <a
            href="#rooms"
            className="group flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-md"
          >
            Book a Room

            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary-light hover:text-primary lg:hidden"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5 sm:px-8">

          {/* Navigation Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={closeMenu}
                className="border-b border-border py-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-5 flex flex-col gap-3">

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-lg border border-border py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Login
            </Link>

            <a
              href="#rooms"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Book a Room
              <FiArrowRight size={16} />
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

