import calculateAge from "../../helpers/calculateAge";
import CharactersList from "../CharactersList/CharactersList";
import css from "./CharactersList.module.css"

const Characteristic = ({characteristicTitle, value, verbiage})=>{
if(verbiage==='birthday'){
value = calculateAge(value)
}
return(Array.isArray(value) ?
 <div className={css.characters}><p>{characteristicTitle}</p> : <CharactersList value={value}/> </div>:
  <p>{characteristicTitle} : {value}</p>)
}; 

export default Characteristic;