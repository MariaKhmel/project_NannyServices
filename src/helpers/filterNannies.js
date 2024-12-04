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

const filterNannies = (babysitters, currentFilter)=>{
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

  return filteredList;
}
export {filterNannies};