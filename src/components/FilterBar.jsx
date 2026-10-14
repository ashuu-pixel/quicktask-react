
const filters = ["all", "active", "completed"];

function FilterBar({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-bar" aria-label="Filter tasks">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={currentFilter === filter ? "filter-button active" : "filter-button"}
          aria-pressed={currentFilter === filter}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
