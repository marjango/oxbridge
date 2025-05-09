import { useState, useEffect } from "react";
import heart from "./img/heart.svg";
import heartFilled from "./img/heart_filled.svg";

const LikeButton = ({ productId, size = "catalog" }) => {
  const [liked, setLiked] = useState(false);

  // Загружаем лайки из localStorage при монтировании и подписываемся на изменения
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    setLiked(savedLikes[productId] || false);

    // Функция для обновления состояния лайков
    const syncLikes = () => {
      const updatedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
      setLiked(updatedLikes[productId] || false);
    };

    // Подписываемся на изменения в localStorage
    window.addEventListener("storage", syncLikes);

    return () => window.removeEventListener("storage", syncLikes); // Удаляем подписку при размонтировании
  }, [productId]);

  const toggleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    const newLikeState = !liked;

    savedLikes[productId] = newLikeState;
    localStorage.setItem("likedProducts", JSON.stringify(savedLikes));

    setLiked(newLikeState);
    
    // Принудительно отправляем событие "storage", чтобы другие компоненты обновились
    window.dispatchEvent(new Event("storage"));
  };

  const buttonSize = size === "product" ? 35 : 27;

  return (
    <img
      src={liked ? heartFilled : heart}
      alt="Like"
      onClick={(e) => {
        e.stopPropagation();
        toggleLike();
      }}
      style={{
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        cursor: "pointer",
        transition: "opacity 0.3s",
      }}
    />
  );
};

export default LikeButton;
