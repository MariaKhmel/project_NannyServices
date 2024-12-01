

const Filters = ({currentFilter , filters,handleFilterChange }) => {


  const handleChange = (e) => {
    handleFilterChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filters">Filters</label>
      <select id="filters" value={currentFilter} onChange={handleChange }>
        {filters.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
