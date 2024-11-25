import NannyCard from "../NannyCard/NannyCard";

const NanniesList = ({ nannies }) => {

  const onReadMoreBtnClick = e=>{
    const card = e.currentTarget;
    const selectedEl = card.querySelector('h3').textContent;
    console.log(e)
  //  if(el.name===selectedEl){
  // setReviews(el.reviews);
  //  } 
  }
  return (
    <ul>
      {nannies.map((el) => (
        <li key={el.name}>
        <NannyCard  el={el} onReadMoreBtnClick={onReadMoreBtnClick} />
        </li>
      ))}
    </ul>
  );
};
export default NanniesList;
