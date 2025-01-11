import { FaRegHeart, FaHeart } from "react-icons/fa";
import css from "./FavoriteHeart.module.css";
const FavoriteHeart = ({ isFavorite, setIsFavorite }) => {
  return (
    <button>
      <FaRegHeart className={css.favoriteHeart} />
    </button>
  );
};
export default FavoriteHeart;
