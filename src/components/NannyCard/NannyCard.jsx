import { useEffect, useState } from "react";
import {
  characteristicList,
  verbiage,
} from "../../helpers/characteristicsList";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import Characteristic from "../Characteristic/Characteristic";
import css from "./NannyCard.module.css";
import MakeAppointmentModal from "../MakeAppointmentModal/MakeAppointmentModal";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const NannyCard = ({ el, nannies, setFavoriteCard }) => {
  const [modal, showModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const onReadMoreBtnClick = (e) => {
    const card = e.currentTarget;
    const selectedEl = card.querySelector("h3").textContent;
    const elToFind = nannies.find((el) => el.name === selectedEl);
    if (elToFind) {
      setReviews(elToFind.reviews);
    }
  };
  const onModalClick = () => {
    showModal(true);
  };

  const onSetFavoriteBtnClick = () => {
    setIsFavorite((prevValue) => {
      if (prevValue) {
        setFavoriteCard(el.name);
      }
      return !prevValue;
    });
  };

  return (
    <div className={css.nannyCard} onClick={onReadMoreBtnClick}>
      {/* <FavoriteHeart
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
        setFavoriteCard={setFavoriteCard}
      /> */}

      <button onClick={onSetFavoriteBtnClick} className={css.favoriteHeartBtn}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      <img src={el.avatar_url} className={css.nannyImg} />
      <div className={css.nannyInfo}>
        <p>Nanny</p>
        <h3>{el.name}</h3>
        <p>{`Price : ${el["price_per_hour"]}`}</p>
        <p>{`Rating : ${el.rating}`}</p>
        <ul>
          {characteristicList.map((characteristicTitle, index) => {
            const title = verbiage[index];
            return (
              <li key={characteristicTitle}>
                <Characteristic
                  characteristicTitle={characteristicTitle}
                  value={el[title]}
                  verbiage={verbiage[index]}
                />
              </li>
            );
          })}
        </ul>
        <p>{el.about}</p>
        {reviews.length === 0 && (
          <button type="button" className={css.readMoreBtn}>
            Read More
          </button>
        )}
        {reviews.length !== 0 && (
          <AdditionalInfo reviews={reviews} onModalClick={onModalClick} />
        )}
      </div>
      {modal && <MakeAppointmentModal showModal={showModal} />}
    </div>
  );
};

export default NannyCard;
