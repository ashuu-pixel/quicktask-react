
function FilterBar({ filter, setFilter, counts }) {
  const filters = [
    { label: "All Tasks", value: "all", count: counts.all },
    { label: "Active", value: "active", count: counts.active },
    { label: "Completed", value: "completed", count: counts.completed },
  ];

  return (
    <div className="filter-bar" aria-label="Filter tasks">
      {filters.map((item) => (
        <button
          key={item.value}
          type="button"
          className={`filter-button ${
            filter === item.value ? "active" : ""
          }`}
          aria-pressed={filter === item.value}
          onClick={() => setFilter(item.value)}
        >
          {item.label}
          <span className="filter-count">{item.count}</span>
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
