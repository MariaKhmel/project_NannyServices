import NannyCard from "../NannyCard/NannyCard";

const NanniesList = ({ nannies, setFavoriteCard }) => {
  return (
    <ul>
      {nannies.map((el, index) => (
        <li key={index}>
          <NannyCard
            el={el}
            nannies={nannies}
            setFavoriteCard={setFavoriteCard}
          />
        </li>
      ))}
    </ul>
  );
};
export default NanniesList;
