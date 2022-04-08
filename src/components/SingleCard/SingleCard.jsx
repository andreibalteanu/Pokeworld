import React from "react";

import "./SingleCard.css";

function SingleCard({ card, backCard, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card front" />
        <img
          src={backCard}
          className="back"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
