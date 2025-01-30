import { useState, useEffect } from "react";
import heart from "./img/heart.svg";
import heartFilled from "./img/heart_filled.svg";

const LikeButton = ({ productId }) => {
  const [liked, setLiked] = useState(false);

  // Проверяем localStorage при загрузке
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    setLiked(savedLikes[productId] || false);
  }, [productId]);

  // Обработчик клика
  const toggleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    const newLikeState = !liked;

    // Обновляем состояние и localStorage
    savedLikes[productId] = newLikeState;
    localStorage.setItem("likedProducts", JSON.stringify(savedLikes));
    setLiked(newLikeState);
  };

  return (
    <img
      src={liked ? heartFilled : heart}
      alt="Like"
      onClick={(e) => {
        e.stopPropagation(); // Чтобы клик по лайку не срабатывал на карточку товара
        toggleLike();
      }}
      style={{
        width: "30px",
        height: "30px",
        cursor: "pointer",
        transition: "opacity 0.3s",
      }}
    />
  );
};

export default LikeButton;
