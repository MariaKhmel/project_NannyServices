import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import NanniesList from "../../components/NanniesList/NanniesList";
import babysitters from "../../data/babysitters.json";
console.log(babysitters);

const Nannies = () => {
  const babysittersCopy = [...babysitters];
  const totalPages = Math.ceil(babysitters.length / 3);
  const [page, setPage] = useState(1);

  const [nannies, setNannies] = useState(babysittersCopy.slice(0, 3));

  const onLoadMore = () => {
    setPage((prevPage) => (prevPage += 1));
    console.log(babysittersCopy.slice(0, 3));
    setNannies(babysittersCopy.slice(0, 3));
  };

  return (
    <>
      <Filters />
      <NanniesList nannies={nannies} />
      <button type="button" onClick={onLoadMore} disabled={totalPages === page}>
        Load More
      </button>
    </>
  );
};

export default Nannies;
