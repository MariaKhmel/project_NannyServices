import NanniesList from "../../components/NanniesList/NanniesList";

const Favotites = ({ favorites, setFavoriteCard }) => {
  return (
    <>
      <p>Favotites</p>
      {favorites.length > 0 && (
        <NanniesList nannies={favorites} setFavoriteCard={setFavoriteCard} />
      )}
    </>
  );
};
export default Favotites;
