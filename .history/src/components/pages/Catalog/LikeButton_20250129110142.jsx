import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

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
    <FaHeart
      onClick={toggleLike}
      size={50}
      color={liked ? "red" : "gray"}
      style={{ cursor: "pointer", transition: "color 0.3s" }}
    />
  );
};

export default LikeButton;
