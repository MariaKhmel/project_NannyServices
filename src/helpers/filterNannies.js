const filterGreaterThan10 = 
babysitters =>babysitters.filter(el=>el['price_per_hour']> 10);
const filterLessThan10 = 
babysitters =>babysitters.filter(el=>el['price_per_hour']< 10);

const filterAtoZ = 
babysitters =>babysitters.sort((a,b)=>a.name.localeCompare(b.name));

const filterZtoA = 
babysitters =>babysitters.sort((a,b)=>b.name.localeCompare(a.name));

const filterPopular = 
babysitters =>babysitters.filter(el=>el.rating>4);

const filterNotPopular = 
babysitters =>babysitters.filter(el=>el.rating<3.5);


export {filterGreaterThan10, filterAtoZ, 
  filterPopular, filterNotPopular, filterZtoA, filterLessThan10};