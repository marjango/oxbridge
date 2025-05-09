import { useState, useEffect } from "react";
import heart from "./img/heart.svg";
import heartFilled from "./img/heart_filled.svg";

const LikeButton = ({ productId, size = "catalog" }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    setLiked(savedLikes[productId] || false);

    const syncLikes = () => {
      const updatedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
      setLiked(updatedLikes[productId] || false);
    };

    window.addEventListener("storage", syncLikes);

    return () => window.removeEventListener("storage", syncLikes);
  }, [productId]);

  const toggleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    const newLikeState = !liked;

    savedLikes[productId] = newLikeState;
    localStorage.setItem("likedProducts", JSON.stringify(savedLikes));

    setLiked(newLikeState);

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
