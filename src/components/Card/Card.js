import "./Card.css";
import "../../shared/Colors.css";
import { useNavigate } from "react-router-dom";

function Card({ name, id, types, image }) {
  const navigate = useNavigate();

  return (
    <div
      className={`card ${types[0].type.name}`}
      onClick={() => {
        window.location.href.endsWith("pokemon/")
          ? navigate(`/${id}`)
          : navigate(`/pokemon/${id}`);
      }}
    >
      <div className="top-card">
        <h3>{name}</h3>
        <h3>#{id.toString().padStart(3, "0")}</h3>
      </div>
      <div className="bottom-card">
        <div className="type-list">
          {types.map((entry) => {
            return (
              <h3 key={entry.slot} className={`${entry.type.name}-type type`}>
                {entry.type.name.charAt(0).toUpperCase() +
                  entry.type.name.slice(1)}
              </h3>
            );
          })}
        </div>
        <img className="card-image" alt="Pokemon" src={image} />
      </div>
    </div>
  );
}

export default Card;
