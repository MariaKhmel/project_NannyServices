
import NannyCard from "../NannyCard/NannyCard";

const NanniesList = ({ nannies }) => {
  
  return (
    <ul >
      {nannies.map((el) => (
        <li key={el.name} >
        <NannyCard  el={el} nannies={nannies}/>
        </li>
      ))}
    </ul>
  );
};
export default NanniesList;
