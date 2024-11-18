import css from './NannyCard.module.css'
const NannyCard = ({ el }) => {
  
  console.log(el);
  return (<div className={css.nannyCard}>
     <img src={el.avatar_url} className={css.nannyImg}/>
     <div className={css.nannyInfo}>
    <p>Nanny</p>
    <h3>{el.name}</h3>

    </div>
  </div>);
};

export default NannyCard;
