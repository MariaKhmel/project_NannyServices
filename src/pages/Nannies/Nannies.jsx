import { useEffect, useState } from "react";
import css from "./Nannies.module.css";
import Filters from "../../components/Filters/Filters";
import NanniesList from "../../components/NanniesList/NanniesList";
import babysitters from "../../data/babysitters.json"
import filters from "../../helpers/filters";
import { filterNannies } from "../../helpers/filterNannies";

const Nannies = ({ setFavoriteCard }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [nannies, setNannies] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(
    filters[filters.length - 1]
  );
  const [filteredBabySitters, setFilteredBabySitters] = useState(babysitters);

  useEffect(() => {
    const filteredList = filterNannies(babysitters, currentFilter);
    setFilteredBabySitters(filteredList);
    setPage(1);
    setTotalPages(Math.ceil(filteredList.length / 3));
    setNannies(filteredList.slice(0, 3));
  }, [currentFilter]);

  const onLoadMore = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      const startIndex = prevPage * 3;
      const endIndex = startIndex + 3;
      console.log(page);
      setNannies((prevNannies) => [
        ...prevNannies,
        ...filteredBabySitters.slice(startIndex, endIndex),
      ]);
      return newPage;
    });
  };

  const handleFilterChange = (selectedFilter) => {
    setCurrentFilter(selectedFilter);
  };

  return (
    <div className={css.nanniesPage}>
      <Filters
        currentFilter={currentFilter}
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
      <NanniesList nannies={nannies} setFavoriteCard={setFavoriteCard} />
      <button type="button" onClick={onLoadMore} disabled={totalPages === page}>
        Load More
      </button>
    </div>
  );
};

export default Nannies;
