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
  let filteredList;
 switch(currentFilter){
  case('Greater than $10'):
  filteredList = filterGreaterThan10(babysitters);
 break;
 case('A to Z'):
 filteredList = filterAtoZ(babysitters);
 break;
 case('Z to A'):
 filteredList = filterZtoA(babysitters);
break;
case('Less than $10'):
filteredList = filterLessThan10(babysitters);
break;
case('Popular'):
filteredList = filterPopular(babysitters);
break;
case('Not popular'):
filteredList= filterNotPopular(babysitters);
break;
case('Show all'):
default:
  filteredList = babysitters;
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
