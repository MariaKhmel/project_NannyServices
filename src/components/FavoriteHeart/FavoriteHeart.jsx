import { FaRegHeart, FaHeart } from "react-icons/fa";
import css from "./FavoriteHeart.module.css";

const FavoriteHeart = ({ isFavorite, setIsFavorite }) => {
  const onSetFavoriteBtnClick = () => {
    setIsFavorite(true);
  };
  return (
    <button onClick={onSetFavoriteBtnClick} className={css.favoriteHeartBtn}>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};
export default FavoriteHeart;
