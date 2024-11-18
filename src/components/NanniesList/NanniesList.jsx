import NannyCard from "../NannyCard/NannyCard";

const NanniesList = ({ nannies }) => {
  return (
    <ul>
      {nannies.map((el) => (
        <li key={el.name}>
        <NannyCard  el={el} />
        </li>
      ))}
    </ul>
  );
};
export default NanniesList;
