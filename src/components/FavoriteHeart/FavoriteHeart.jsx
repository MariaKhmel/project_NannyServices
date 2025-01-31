import { FaRegHeart, FaHeart } from "react-icons/fa";
import css from "./FavoriteHeart.module.css";

const FavoriteHeart = ({ isFavorite, setIsFavorite }) => {
  // const onSetFavoriteBtnClick = () => {
  //   setIsFavorite((prevValue) => !prevValue);
  // };
  return (
    <button
      onClick={() => {
        setIsFavorite((prevValue) => !prevValue);
      }}
      className={css.favoriteHeartBtn}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};
export default FavoriteHeart;
