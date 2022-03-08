import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <div className="top-card">
        <h3>Name</h3>
        <h3>Index</h3>
      </div>
      <div className="bottom-card">
        <h3>Type</h3>
        <h3>Image</h3>
      </div>
    </div>
  );
}

export default Card;
