export default function Pagination({ filters, setFilters }) {
  return (
    <div>
      Page: {filters.offset / filters.limit + 1}
      <button
        disabled={filters.offset <= 0}
        onClick={() =>
          setFilters({
            ...filters,
            offset: parseInt(filters.offset) - parseInt(filters.limit),
          })
        }
      >
        Prev
      </button>
      <button
        onClick={() =>
          setFilters({
            ...filters,
            offset: parseInt(filters.offset) + parseInt(filters.limit),
          })
        }
      >
        Next
      </button>
    </div>
  );
}
