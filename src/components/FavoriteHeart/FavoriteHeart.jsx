import { FaRegHeart, FaHeart } from "react-icons/fa";
import css from "./FavoriteHeart.module.css";

const FavoriteHeart = ({ isFavorite, setIsFavorite }) => {
  return (
    <button
      onClick={() => setIsFavorite(true)}
      className={css.favoriteHeartBtn}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};
export default FavoriteHeart;
