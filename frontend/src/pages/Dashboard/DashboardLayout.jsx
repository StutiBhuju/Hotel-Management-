
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FiBell,
  FiCalendar,
  FiCreditCard,
  FiFileText,
  FiHeart,
  FiHome,
  FiMenu,
  FiSearch,
  FiSettings,
  FiStar,
  FiX,
  FiLogOut
} from "react-icons/fi";

import Logo from "../../components/Logo";
import { useAuth } from "../../contexts/AuthContexts";
import { Logout } from "../../apis/AuthApi";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const { user,setuser } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogout = async () => {

    try {

      const data = await Logout();
      setuser(null)
      navigate("/")

      console.log(data);

    } catch (error) {

      console.error("Logout Error:", error);

    }

  };

  const mainNavItems = [
    {
      name: "Home",
      path: "/",
      icon: FiHome,
    },
    {
      name: "My Bookings",
      path: "/bookings",
      icon: FiCalendar,
    },
    {
      name: "Favorites",
      path: "/favorites",
      icon: FiHeart,
    },
    {
      name: "Payments",
      path: "/payments",
      icon: FiCreditCard,
    },
    {
      name: "Invoices",
      path: "/invoices",
      icon: FiFileText,
    },
    {
      name: "Reviews",
      path: "/reviews",
      icon: FiStar,
    },
  ];



  const navLink =
    "group flex items-center gap-4 rounded-xl px-5 py-3.5 text-[15px] font-medium text-muted transition-all duration-200 hover:bg-primary-light hover:text-primary";

  const active =
    "bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary hover:text-white";

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-72 shrink-0 flex-col
          border-r border-border bg-surface
          transition-transform duration-300 ease-in-out
          lg:static lg:z-auto lg:translate-x-0
          ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }
        `}
      >

        {/* =================================================
            LOGO
        ================================================== */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-border px-6">

          <Logo />

          {/* Mobile Close */}
          <button
            onClick={closeSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-primary-light hover:text-primary lg:hidden"
            aria-label="Close sidebar"
          >
            <FiX size={21} />
          </button>

        </div>

        {/* =================================================
            NAVIGATION
        ================================================== */}
        <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-7">

          {/* Main Navigation */}
          <div className="space-y-2">

            {mainNavItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `${navLink} ${isActive ? active : ""}`
                  }
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />

                  <span>{item.name}</span>
                </NavLink>
              );
            })}

          </div>
          <div className="mt-auto border-t border-border pt-5">

            <button
              onClick={handleLogout}
              className="group flex w-full items-center gap-4 rounded-xl px-5 py-4 text-base font-semibold text-muted transition-all duration-200 hover:bg-red-50 hover:text-red-600"
            >

              <FiLogOut
                size={23}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span>Logout</span>

              <span className="ml-auto text-lg opacity-50 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>

            </button>

          </div>

        </nav>

      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="flex min-w-0 flex-1 flex-col">

        {/* =================================================
            TOP HEADER
        ================================================== */}
        <header className="flex h-20 shrink-0 items-center justify-between border-b border-border bg-surface px-4 sm:px-6 lg:px-8">

          {/* Left Side */}
          <div className="flex min-w-0 items-center gap-3">

            {/* Mobile Hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-muted transition hover:bg-primary-light hover:text-primary lg:hidden"
              aria-label="Open sidebar"
            >
              <FiMenu size={23} />
            </button>

            {/* Greeting */}
            <div className="min-w-0">

              <h1 className="truncate font-serif text-lg font-semibold text-foreground sm:text-xl lg:text-2xl">
                Welcome back,{" "}
                {user?.name?.split(" ")[0] || "Guest"} 👋
              </h1>

              <p className="mt-0.5 hidden text-sm text-muted sm:block">
                Manage your stays and discover your next destination.
              </p>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <div className="ml-3 flex shrink-0 items-center gap-2 sm:gap-4 lg:gap-5">

            {/* Notification */}
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-all hover:bg-primary-light hover:text-primary"
              aria-label="Notifications"
            >
              <FiBell size={20} />

              {/* Notification Dot */}
              <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full bg-secondary" />
            </button>

            {/* Divider */}
            <div className="hidden h-8 w-px bg-border sm:block" />

            {/* Profile */}
            <div className="flex items-center gap-3">

              {/* Name */}
              <div className="hidden text-right md:block">

                <p className="max-w-37.5 truncate text-sm font-semibold text-foreground">
                  {user?.name || "Guest"}
                </p>

                <p className="text-xs text-muted">
                  Hotel Guest
                </p>

              </div>

              {/* Avatar */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white ring-4 ring-primary-light sm:h-11 sm:w-11">
                {user?.name?.slice(0, 1)?.toUpperCase() || "G"}
              </div>

            </div>

          </div>

        </header>

        {/* =================================================
            PAGE CONTENT
        ================================================== */}
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;

