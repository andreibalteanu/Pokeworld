import "./Card.css";

function Card({ name, id, types, image }) {
  function CorrectId(number) {
    if (number > 0 && number < 10) return "00" + number;
    else if (number > 9 && number < 100) return "0" + number;
    else if (number > 99 && number < 1000) return number;
  }
  return (
    <div className="Card">
      <div className="top-card">
        <h3>{name}</h3>
        <h3 className={id}>#{CorrectId(id)}</h3>
      </div>
      <div className="bottom-card">
        <div className="type-list">
          {types.map((pokemon) => {
            return (
              <h3 className={pokemon.type.name}>
                {pokemon.type.name.charAt(0).toUpperCase() +
                  pokemon.type.name.slice(1)}
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
