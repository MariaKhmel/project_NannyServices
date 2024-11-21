import { characteristicList, verbiage } from '../../helpers/characteristicsList';
import Characteristic from '../Characteristic/Characteristic';
import css from './NannyCard.module.css'
const NannyCard = ({ el }) => {

const onReadMoreBtnClick = e=>{
  const card = e.currentTarget;
  console.log(card.querySelector('h3').textContent);
  }
  
  return (<div className={css.nannyCard} onClick={onReadMoreBtnClick}>
     <img src={el.avatar_url} className={css.nannyImg}/>
     <div className={css.nannyInfo}>
    <p>Nanny</p>
    <h3>{el.name}</h3>
    <ul> 
{characteristicList.map((characteristicTitle, index)=>{
const title = verbiage[index]
    return (<li key={characteristicTitle}>
      <Characteristic 
      characteristicTitle={characteristicTitle} 
      value={el[title]} 
      verbiage={verbiage[index]}/>
      </li>)
  })
}  

</ul>
<p>{el.about}</p>
<button type='button' className={css.readMoreBtn} >Read More</button>
    </div>
  </div>);
};

export default NannyCard;
