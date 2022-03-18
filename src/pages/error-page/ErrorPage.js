import "./ErrorPage.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="error-page">
      <p>Hi! I'm Snorlax, i'm blocking the path</p>
      <img
        alt="pokemon"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
      />
      <p>
        Click <Link to="/pokemon">here</Link> to go back
      </p>
    </div>
  );
}

export default ErrorPage;
