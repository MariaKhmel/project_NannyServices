import NannyCard from "../NannyCard/NannyCard";

const NanniesList = ({ nannies, setFavorites }) => {
  return (
    <ul>
      {nannies.map((el) => (
        <li key={el.name}>
          <NannyCard el={el} nannies={nannies} setFavorites={setFavorites} />
        </li>
      ))}
    </ul>
  );
};
export default NanniesList;
