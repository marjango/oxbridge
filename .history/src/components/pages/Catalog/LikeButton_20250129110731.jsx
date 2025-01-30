import { useState, useEffect } from "react";
import heart from './img/heart.svg'
import heartfilled from './img/heart_filled.svg'

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  // Проверяем localStorage при загрузке компонента
  useEffect(() => {
    const savedLike = localStorage.getItem("liked");
    if (savedLike === "true") {
      setLiked(true);
    }
  }, []);

  // Обработчик клика
  const toggleLike = () => {
    const newLikeState = !liked;
    setLiked(newLikeState);
    localStorage.setItem("liked", newLikeState.toString());
  };

  return (
    <img
      src={liked ? heartfilled : heart}
      alt="Like"
      onClick={toggleLike}
      style={{
        width: "35px",
        height: "35px",
        cursor: "pointer",
        transition: "opacity 0.3s",
      }}
    />
  );
};

export default LikeButton;
