import NanniesList from "../../components/NanniesList/NanniesList";

const Favotites = ({ favorites }) => {
  console.log(favorites);
  return (
    <>
      <p>Favotites</p>
      <NanniesList />
    </>
  );
};
export default Favotites;
