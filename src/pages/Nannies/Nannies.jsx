import {  useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import NanniesList from "../../components/NanniesList/NanniesList";
import babysitters from "../../helpers/babysitters.json";
import filters from "../../helpers/filters";
import { filterNanniesGreaterTan10 } from "../../helpers/filterNannies";

const Nannies = () => {
  const [totalPages] = useState(Math.ceil(babysitters.length / 3));
  const [page, setPage] = useState(1);
  const [nannies, setNannies] = useState(babysitters.slice(0, 3));
  const [currentFilter, setCurrentFilter] = useState(filters[0]);
// useEffect(()=>{
//   if(filter )
// },[])
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    const startIndex = page * 3;
    const endIndex = startIndex + 3;
    setNannies(babysitters.slice(0, endIndex));
  };

const handleFilterChange = (selectedFilter)=>{
setCurrentFilter(selectedFilter);
switch(selectedFilter){
  case('Greater than $10'):
 setNannies(filterNanniesGreaterTan10(babysitters));

}
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
