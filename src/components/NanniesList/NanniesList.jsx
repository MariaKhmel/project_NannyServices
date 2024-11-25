import { useState } from "react";
import NannyCard from "../NannyCard/NannyCard";

const NanniesList = ({ nannies }) => {
const [reviews, setReviews] = useState([])
  const onReadMoreBtnClick = e=>{
    const card = e.currentTarget;
    const selectedEl = card.querySelector('h3').textContent;
 const elToFind = nannies.find(el=>el.name===selectedEl);
if(elToFind){
setReviews(elToFind.reviews);
}

  }
  return (
    <ul>
      {nannies.map((el) => (
        <li key={el.name}>
        <NannyCard  el={el} onReadMoreBtnClick={onReadMoreBtnClick} reviews={reviews}/>
        </li>
      ))}
    </ul>
  );
};
export default NanniesList;
