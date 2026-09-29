import { Link } from "react-router-dom";

const Logo = ({ onClick }) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-3"
    >
      {/* Logo Mark */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-105">
        <span className="font-serif text-xl font-bold text-white">
          G
        </span>
      </div>

      {/* Logo Text */}
      <div className="leading-none">
        <h1 className="font-serif text-xl font-semibold tracking-wide text-primary">
          GRAND HAVEN
        </h1>

        <p className="mt-1 text-[8px] font-medium tracking-[0.32em] text-muted">
          HOTEL & RESORT
        </p>
      </div>
    </Link>
  );
};

export default Logo;