import { useState } from "react";
import filters from "../../data/filters";

const Filters = () => {
  const [filter, setFilter] = useState(filters[0]);
  const handleValueChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filters">Filters</label>
      <select id="filters" value={filter} onChange={handleValueChange}>
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
