import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import NanniesList from "../../components/NanniesList/NanniesList";
import babysitters from "../../data/babysitters.json";

const Nannies = () => {
  const totalPages = Math.ceil(babysitters.length / 3);
  console.log(totalPages);
  const firstPortion = [...babysitters].splice(0, 3);
  const [page, setPage] = useState(1);
  const [nannies, setNannies] = useState(firstPortion);

  const onLoadMore = () => setPage((prevPage) => (prevPage += 1));

  return (
    <>
      <Filters />
      {/* <NanniesList babysitters={babysitters} /> */}
      <button type="button" onClick={onLoadMore} disabled={totalPages === page}>
        Load More
      </button>
    </>
  );
};

export default Nannies;
