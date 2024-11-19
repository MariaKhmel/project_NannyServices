const CharactersList = ({value})=>{
  return (<ul>{ value.map((el, index)=>(<li key={el}> <p style={{display:"inline-block"}}>{el}</p>
  {index !== value.length-1 && <span>,</span>}
  </li>))}</ul>)
}

export default CharactersList;