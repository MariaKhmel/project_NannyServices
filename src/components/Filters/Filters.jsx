import filters from "../../data/filters";

const Filters = () => {
  return (
    <select>
      {filters.map((el) => (
        <li key={el}>
          <option type="select" value={el}></option>
        </li>
      ))}
    </select>
  );
};

export default Filters;
