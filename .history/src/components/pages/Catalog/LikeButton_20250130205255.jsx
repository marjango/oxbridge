import { useState, useEffect } from "react";
import heart from "./img/heart.svg";
import heartFilled from "./img/heart_filled.svg";

const LikeButton = ({ productId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    setLiked(savedLikes[productId] || false);
  }, [productId]);

  const toggleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    const newLikeState = !liked;

    savedLikes[productId] = newLikeState;
    localStorage.setItem("likedProducts", JSON.stringify(savedLikes));
    setLiked(newLikeState);
  };

  return (
    <img
      src={liked ? heartFilled : heart}
      alt="Like"
      onClick={(e) => {
        e.stopPropagation();
        toggleLike();
      }}
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
