import "./CardProfile.css";

function CardProfile({ name, id, types, image }) {
  return (
    <div className={`card-profile ${types[0].type.name}`}>
      <div className="top-profile">
        <div>
          <h2>{name}</h2>
          <h3>#{id.toString().padStart(3, "0")}</h3>
        </div>
        <div className="type-list-profile">
          {types.map((entry) => {
            return (
              <h3 key={entry.slot} className="type-profile">
                {entry.type.name.charAt(0).toUpperCase() +
                  entry.type.name.slice(1)}
              </h3>
            );
          })}
        </div>
      </div>
      <div className="middle-profile">
        <img className="image-profile" alt="Pokemon" src={image} />
      </div>
      <div className="bottom-profile">
        <span>
          <div>Hello</div>
          <div>World</div>
        </span>
        <span>
          <div>Hello</div>
          <div>World</div>
        </span>
        <span>
          <div>Hello</div>
          <div>World</div>
        </span>
        <span>
          <div>Hello</div>
          <div>World</div>
        </span>
        <span>
          <div>Hello</div>
          <div>World</div>
        </span>
      </div>
    </div>
  );
}

export default CardProfile;
