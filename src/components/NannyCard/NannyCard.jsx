import css from './NannyCard.module.css'
const NannyCard = ({ el }) => {
  console.log(el);
  return <div>
    <p>Nanny</p>
    <h3>{el.name}</h3>
    <img src={el.avatar_url} className={css.nannyImg}/>
  </div>;
};

export default NannyCard;
