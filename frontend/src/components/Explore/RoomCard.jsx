import { FiHeart } from "react-icons/fi";

const RoomCard = ({ room, favorite, onFavorite, onBook }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">

      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden">

        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/30 to-transparent" />

        {/* Discount */}
        {room.discount && (
          <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-bold text-white shadow-sm">
            {room.discount}% OFF
          </span>
        )}

        {/* Favorite */}
        <button
          onClick={onFavorite}
          aria-label="Add to favorites"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-muted shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:text-error"
        >
          <FiHeart
            size={18}
            fill={favorite ? "currentColor" : "none"}
            className={favorite ? "text-error" : ""}
          />
        </button>

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Name */}
        <div className="flex items-start justify-between gap-3">

          <h3 className="font-serif text-lg font-semibold text-foreground">
            {room.name}
          </h3>

          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-foreground">
            <span className="text-secondary">★</span>
            {room.rating}
          </div>

        </div>

        {/* Room Info */}
        <p className="mt-2 text-sm text-muted">
          {room.guests} Guests
          <span className="mx-2 text-border">•</span>
          {room.bed}
        </p>

        {/* Amenities */}
        <div className="mt-4 flex flex-wrap gap-2">

          {room.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-md bg-background px-2.5 py-1 text-[11px] font-medium text-muted"
            >
              {amenity}
            </span>
          ))}

        </div>

        {/* Divider */}
        <div className="my-5 border-t border-border" />

        {/* Price */}
        <div className="flex items-end justify-between gap-3">

          <div>

            {room.originalPrice && (
              <p className="text-xs text-muted line-through">
                NPR {room.originalPrice.toLocaleString()}
              </p>
            )}

            <div className="flex items-baseline gap-1">

              <span className="text-xl font-bold text-foreground">
                NPR {room.price.toLocaleString()}
              </span>

              <span className="text-xs text-muted">
                / night
              </span>

            </div>

          </div>

          <button
            onClick={() => onBook(room)}
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark">
            Book Room
          </button>

        </div>

      </div>

    </article>
  );
};


export default RoomCard