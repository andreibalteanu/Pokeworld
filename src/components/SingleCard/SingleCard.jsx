import React from "react";
import "./SingleCard.css";

function SingleCard({ card, backCard }) {
  const handleClick = () => {};
  return (
    <div className="card">
      <img src={card.src} className="front" alt="card front" />
      <img
        src={backCard}
        className="back"
        alt="card back"
        onClick={handleClick}
      />
    </div>
  );
}

export default SingleCard;
