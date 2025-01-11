import { FaRegHeart, FaHeart } from "react-icons/fa";
import css from "./FavoriteHeart.module.css";
const FavoriteHeart = () => {
  return (
    <>
      <FaRegHeart className={css.favoriteHeart} />
    </>
  );
};
export default FavoriteHeart;
