import "./CardProfile.css";

function CardProfile({ name, id, types, image, weight, height }) {
  function convertWeight(weight) {
    weight = weight.toString();
    if (weight[weight.length - 1] == 0) {
      return weight.slice(0, -1);
    } else {
      return `${weight.slice(0, -1)},${weight[weight.length - 1]}`;
    }
  }
  function convertHeight(height) {
    height = height.toString();
    if (height[height.length - 1] == 0) {
      return height.slice(0, -1);
    } else if (parseInt(height) < 10) {
      return `0,${height}`;
    } else if (parseInt(height) > 10) {
      return `${height.slice(0, -1)},${height[height.length - 1]}`;
    }
  }
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
              <h3
                key={entry.slot}
                className={`${entry.type.name}-type type type-profile`}
              >
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
          <div>Weight</div>
          <div>{convertWeight(weight)} kg</div>
        </span>
        <span>
          <div>Height</div>
          <div>{convertHeight(height)} meters</div>
        </span>
        <span>
          <div>Color</div>
          <div>World</div>
        </span>
        <span>
          <div>Habitat</div>
          <div>World</div>
        </span>
        <span>
          <div>Shape</div>
          <div>World</div>
        </span>
      </div>
    </div>
  );
}

export default CardProfile;
