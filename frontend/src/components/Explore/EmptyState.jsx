import {FiSearch} from 'react-icons/fi'

const EmptyState = ({ onClear }) => {
  return (
    <div className="flex min-h-105 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 text-center">

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
        <FiSearch size={27} />
      </div>

      <h3 className="font-serif text-xl font-semibold text-foreground">
        No rooms found
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
        Try adjusting your dates or filters to find an available room.
      </p>

      <button
        onClick={onClear}
        className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
      >
        Clear Filters
      </button>

    </div>
  );
};


export default EmptyState