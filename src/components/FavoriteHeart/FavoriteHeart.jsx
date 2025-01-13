import { FaRegHeart, FaHeart } from "react-icons/fa";
import css from "./FavoriteHeart.module.css";
import { useState } from "react";

const FavoriteHeart = ({ isFavorite, setIsFavorite }) => {
  return (
    <button
      onClick={() => setIsFavorite(true)}
      className={css.favoriteHeartBtn}
    >
      <FaRegHeart />
    </button>
  );
};
export default FavoriteHeart;
