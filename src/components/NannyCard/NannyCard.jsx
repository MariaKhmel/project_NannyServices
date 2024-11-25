
import { useState } from 'react';
import { characteristicList, verbiage } from '../../helpers/characteristicsList';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import Characteristic from '../Characteristic/Characteristic';
import css from './NannyCard.module.css'
import MakeAppointmentModal from '../MakeAppointmentModal/MakeAppointmentModal';
const NannyCard = ({ el, onReadMoreBtnClick, reviews }) => {
const [modal, showModal]=  useState(false)
const onModalClick = ()=>{
  showModal(true);
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
{reviews.length === 0 && 
( <button type='button' className={css.readMoreBtn} >Read More</button>)}
{reviews.length !== 0 && 
( <AdditionalInfo reviews={reviews} 
onModalClick={onModalClick}/>)}
    </div>
    {modal && <MakeAppointmentModal/>}
  </div>);
};

export default NannyCard;
