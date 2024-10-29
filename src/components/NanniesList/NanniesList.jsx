const NanniesList = ({ nannies }) => {
  return <ul>{nannies.map((el) => el.name)}</ul>;
};
export default NanniesList;
