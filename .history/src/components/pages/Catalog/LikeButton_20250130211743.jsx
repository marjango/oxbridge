import { useState, useEffect } from "react";
import heart from "./img/heart.svg";
import heartFilled from "./img/heart_filled.svg";

const LikeButton = ({ productId, size = "catalog" }) => {
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

  const buttonSize = size === "product" ? 27 : 35; // 27px для product, 35px для catalog

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
