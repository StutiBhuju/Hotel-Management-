
import React, { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import { Register } from "../../apis/AuthApi";
import { useAuth } from "../../contexts/AuthContexts";

const RegisterPage = () => {
  const { setuser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Register(formData);

      console.log(response);

      setuser(response.users);

      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* =====================================================
            LEFT SIDE - HOTEL VISUAL
        ====================================================== */}
        <div className="relative hidden overflow-hidden lg:block">

          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury hotel interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-primary-dark/95 via-primary-dark/45 to-black/20" />

          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">

            {/* Logo */}
            <Logo variant="dark" />

            {/* Bottom Content */}
            <div className="max-w-lg">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-light">
                  Begin Your Journey
                </span>
              </div>

              <h1 className="font-serif text-5xl font-semibold leading-tight text-white xl:text-6xl">
                Stay somewhere
                <span className="block text-secondary-light">
                  worth remembering.
                </span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                Create your account and discover comfortable rooms,
                thoughtful amenities, and an effortless way to manage
                your stays.
              </p>

              {/* Highlight */}
              <div className="mt-8 flex items-center gap-4">

                <div className="h-px w-10 bg-secondary" />

                <p className="font-serif text-base italic text-white/80">
                  Your comfort. Our commitment.
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE - REGISTER FORM
        ====================================================== */}
        <div className="flex min-h-screen flex-col">

          {/* Mobile Header */}
          <div className="flex items-center justify-between p-5 sm:p-8 lg:hidden">

            <Logo />

            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              <FiArrowLeft size={16} />
              Home
            </Link>

          </div>

          {/* Form Area */}
          <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-10 lg:px-16 xl:px-24">

            <div className="w-full max-w-md">

              {/* Back to Home */}
              <Link
                to="/"
                className="mb-8 hidden w-fit items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary lg:flex"
              >
                <FiArrowLeft size={16} />
                Back to home
              </Link>

              {/* Heading */}
              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Create Account
                </p>

                <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                  Join us.
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted">
                  Create your account to book rooms and manage your stays
                  with ease.
                </p>

              </div>

              {/* =================================================
                  FORM
              ================================================== */}
              <form
                onSubmit={handleSubmit}
                className="mt-9 space-y-5"
              >

                {/* Full Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>

                  <div className="relative">

                    <FiUser
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-13 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                  </div>

                </div>

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>

                  <div className="relative">

                    <FiMail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="h-13 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                  </div>

                </div>

                {/* Password */}
                <div>

                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>

                  <div className="relative">

                    <FiLock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                      className="h-13 w-full rounded-xl border border-border bg-surface pl-11 pr-12 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-primary"
                    >
                      {showPassword ? (
                        <FiEyeOff size={18} />
                      ) : (
                        <FiEye size={18} />
                      )}
                    </button>

                  </div>

                  <p className="mt-2 text-xs text-muted">
                    Use at least 6 characters for your password.
                  </p>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-primary text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
                >
                  Create Account

                  <FiArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>

              {/* Login */}
              <div className="mt-8 text-center">

                <p className="text-sm text-muted">
                  Already have an account?{" "}

                  <Link
                    to="/login"
                    className="font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Sign in
                  </Link>
                </p>

              </div>

              {/* Terms */}
              <p className="mt-7 text-center text-xs leading-5 text-muted">

                By creating an account, you agree to our{" "}

                <Link
                  to="/terms"
                  className="text-primary hover:underline"
                >
                  Terms
                </Link>{" "}

                and{" "}

                <Link
                  to="/privacy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .

              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
