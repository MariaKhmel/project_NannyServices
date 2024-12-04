import {  useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import NanniesList from "../../components/NanniesList/NanniesList";
import babysitters from "../../helpers/babysitters.json";
import filters from "../../helpers/filters";


const Nannies = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [nannies, setNannies] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(filters[filters.length-1]);
const [filteredBabySitters, setFilteredBabySitters] = useState(babysitters)

 useEffect(()=>{
const filteredList = filterNannies(babysitters, currentFilter)
 setFilteredBabySitters(filteredList);
 setPage(1);
 setTotalPages(Math.ceil(filteredList.length/3));
 setNannies(filteredList.slice(0,3))
 },[currentFilter]);


  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    const startIndex = (page - 1) * 3;
    const endIndex = startIndex + 3;
    setNannies(filteredBabySitters.slice(0, endIndex));
  };

const handleFilterChange = (selectedFilter)=>{
setCurrentFilter(selectedFilter);

}

  return (
    <>
      <Filters currentFilter={currentFilter}
       filters={filters} 
       handleFilterChange={handleFilterChange}/>
      <NanniesList nannies={nannies} />
      <button type="button" onClick={onLoadMore} disabled={totalPages === page}>
        Load More
      </button>
    </>
  );
};

export default Nannies;
