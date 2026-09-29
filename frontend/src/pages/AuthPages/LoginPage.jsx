
import React, { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { Login } from "../../apis/AuthApi";
import Logo from "../../components/Logo";
import { useAuth } from '../../contexts/AuthContexts'

const LoginPage = () => {
  const navigate = useNavigate();

  const { setuser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    try {
      const response = await Login(formData);

      console.log("Login Response:", response);

      // Store user in Auth Context
      setuser(response.users);

      // Navigate after successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ========================================
            LEFT - HOTEL VISUAL
        ======================================== */}
        <div className="relative hidden overflow-hidden lg:block">

          <img
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury hotel room"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-primary-dark/95 via-primary-dark/40 to-black/20" />

          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">

            {/* Logo */}
            <Logo variant="dark" />

            {/* Content */}
            <div className="max-w-lg">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-light">
                  Welcome Back
                </span>
              </div>

              <h1 className="font-serif text-5xl font-semibold leading-tight text-white xl:text-6xl">
                Your stay
                <span className="block text-secondary-light">
                  starts here.
                </span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                Sign in to manage your reservations, discover new rooms,
                and enjoy a seamless hotel experience.
              </p>

              <div className="mt-8 border-l-2 border-secondary pl-5">
                <p className="font-serif text-base italic text-white/80">
                  "Where every stay becomes a memorable experience."
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================
            RIGHT - LOGIN
        ======================================== */}
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

          {/* Form Container */}
          <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-10 lg:px-16 xl:px-24">

            <div className="w-full max-w-md">

              {/* Back */}
              <Link
                to="/"
                className="mb-10 hidden w-fit items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary lg:flex"
              >
                <FiArrowLeft size={16} />
                Back to home
              </Link>

              {/* Heading */}
              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Member Login
                </p>

                <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                  Welcome back.
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted">
                  Sign in to access your account and manage your stays.
                </p>

              </div>

              {/* ========================================
                  FORM
              ======================================== */}
              <form
                onSubmit={handleSubmit}
                className="mt-9 space-y-5"
              >

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

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-medium text-primary transition-colors hover:text-primary-dark"
                    >
                      Forgot password?
                    </Link>

                  </div>

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
                      placeholder="Enter your password"
                      required
                      className="h-13 w-full rounded-xl border border-border bg-surface pl-11 pr-12 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
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

                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2 pt-1">

                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-border accent-primary"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-muted"
                  >
                    Remember me
                  </label>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-primary text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
                >
                  Sign In

                  <FiArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">

                <div className="h-px flex-1 bg-border" />

                <span className="text-xs text-muted">
                  New to Grand Haven?
                </span>

                <div className="h-px flex-1 bg-border" />

              </div>

              {/* Register */}
              <Link
                to="/register"
                className="flex h-13 w-full items-center justify-center rounded-xl border border-border text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary-light hover:text-primary"
              >
                Create an Account
              </Link>

              {/* Terms */}
              <p className="mt-8 text-center text-xs leading-5 text-muted">

                By continuing, you agree to our{" "}

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

export default LoginPage;
