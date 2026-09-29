
import React from "react";

const Loader = ({ text = "Loading...", fullScreen = false }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen
          ? "fixed inset-0 z-9999 bg-background"
          : "w-full py-10"
      }`}
    >
      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="relative h-12 w-12">

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary-light" />

          {/* Spinning Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary" />

          {/* Center */}
          <div className="absolute inset-2.25 flex items-center justify-center rounded-full bg-primary">
            <span className="font-serif text-sm font-semibold text-white">
              G
            </span>
          </div>

        </div>

        {/* Loading Text */}
        {text && (
          <p className="mt-4 text-sm font-medium text-muted">
            {text}
          </p>
        )}

      </div>
    </div>
  );
};

export default Loader;

