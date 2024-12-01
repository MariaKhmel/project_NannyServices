import {  useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import NanniesList from "../../components/NanniesList/NanniesList";
import babysitters from "../../helpers/babysitters.json";
import filters from "../../helpers/filters";
import { filterAtoZ, filterGreaterThan10, filterLessThan10, filterNotPopular, filterPopular, filterZtoA } from "../../helpers/filterNannies";

const Nannies = () => {
  const [totalPages] = useState(Math.ceil(babysitters.length / 3));
  const [page, setPage] = useState(1);
  const [nannies, setNannies] = useState(babysitters.slice(0, 3));
  const [currentFilter, setCurrentFilter] = useState(filters[filters.length-1]);
 useEffect(()=>{
 switch(currentFilter){
  case('Show all'):
  setNannies(babysitters.slice(0, 3));
  break;
  case('Greater than $10'):
 setNannies(filterGreaterThan10(babysitters).slice(0, 3));
 break;
 case('A to Z'):
  setNannies(filterAtoZ(babysitters).slice(0, 3));
 break;
 case('Z to A'):
 setNannies(filterZtoA(babysitters).slice(0, 3));
break;
case('Less than $10'):
setNannies(filterLessThan10(babysitters).slice(0, 3));
break;
case('Popular'):
setNannies(filterPopular(babysitters).slice(0, 3));
break;
case('Not popular'):
setNannies(filterNotPopular(babysitters).slice(0, 3));
break;
 }
 },[currentFilter]);


  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    const startIndex = page * 3;
    const endIndex = startIndex + 3;
    setNannies(babysitters.slice(0, endIndex));
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
