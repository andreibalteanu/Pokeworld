import "./CardSprites.css";

function CardSprites({ images, types }) {
  images = Object.values(images);
  images.pop();
  return (
    <div className={`card-sprites ${types[0].type.name}`}>
      <h2>Sprites</h2>
      <div className="card-sprites-versions">
        {images.map((image, index) => {
          if (image != null)
            return (
              <div
                key={`card-sprites-card${index}`}
                className="card-sprites-images"
              >
                <p>Front Female</p>
                <img alt="Pokemon" src={image} />
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default CardSprites;
