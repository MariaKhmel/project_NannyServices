import { characteristicList, verbiage } from '../../data/characteristicsList';
import Characteristic from '../Characteristic/Characteristic';
import css from './NannyCard.module.css'
const NannyCard = ({ el }) => {

  return (<div className={css.nannyCard}>
     <img src={el.avatar_url} className={css.nannyImg}/>
     <div className={css.nannyInfo}>
    <p>Nanny</p>
    <h3>{el.name}</h3>
    <ul> 
{characteristicList.map((characteristicTitle, index)=>{
const title = verbiage[index]
    return (<li key={characteristicTitle}>
      <Characteristic characteristicTitle={characteristicTitle} value={el[title]}/>
      </li>)
  })
}  

</ul>
    </div>
  </div>);
};

export default NannyCard;
