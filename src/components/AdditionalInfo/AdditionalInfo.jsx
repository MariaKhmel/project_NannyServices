const AdditionalInfo = ({reviews, onModalClick})=>{
const calculateRating= rating=>{
  return rating.toFixed(1, 0);
}
  return(<>
  <ul>
  {reviews.map((el)=>(<li key={el.reviewer}>
    <p>{el.reviewer}</p>
    <p>{calculateRating(el.rating)}</p>
    <p>{el.comment}</p>
  </li>))}
  </ul>
  <button type="button" onClick={onModalClick}>Make an appointment</button>
  </>)
}

export default AdditionalInfo;