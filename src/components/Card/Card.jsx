import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ info }) => {
  const navigate = useNavigate();

  const handleRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="card" onClick={() => handleRecipe(info.id)}>
      <img
        src={info.image ? info.image : "./images/no-image.jpeg"}
        alt={info.title || "Recipe Image"}
        className="card-img"
      />
      <div className="card-tittle">
        <p className="card-para">{info.title || "Untitled Recipe"}</p>
        <div className="card-detail">
          <p>{info.readyInMinutes} min</p>
          <p>{info.servings} plates</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
