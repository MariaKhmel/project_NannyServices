const NanniesList = ({ babysitters }) => {
  return <ul>{babysitters.map((el) => el.name)}</ul>;
};
export default NanniesList;
