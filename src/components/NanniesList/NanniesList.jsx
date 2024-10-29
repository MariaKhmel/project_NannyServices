import NannyCard from "../NannyCard/NannyCard";

const NanniesList = ({ nannies }) => {
  return (
    <ul>
      {nannies.map((el) => (
        <NannyCard key={el.name} el={el} />
      ))}
    </ul>
  );
};
export default NanniesList;
