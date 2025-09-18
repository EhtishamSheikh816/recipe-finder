import { useParams, useNavigate } from "react-router-dom";
import "./Recipe.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ErrorContext } from "../../context/ErrorContext";
import ServerError from "../../components/ServerError/ServerError";
import Loading from "../../components/Loading/Loading";

const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

const Recipe = ({ fav, setFav }) => {
  const { error, setError } = useContext(ErrorContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BaseURL}${id}/information?apiKey=${apiKey}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleAddFav = () => {
    const isRecipe = fav.includes(id);
    if (isRecipe) {
      setFav((prev) => prev.filter((str) => str !== id));
    } else {
      setFav((prev) => [...prev, id]);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ServerError />;

  return (
    <div className="recipe-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <div className="recipe-header">
        <img
          src={data.image || "./images/no-image.jpeg"}
          alt={data.title || "Untitled Image"}
          className="recipe-image"
        />
        <div className="recipe-info">
          <h1 className="recipe-title">{data.title}</h1>
          <div className="recipe-meta">
            <div className="diets">
              {data.diets?.length > 0 ? (
                data.diets.map((diet, ind) => (
                  <span className="diet-badge" key={ind}>
                    {diet}
                  </span>
                ))
              ) : (
                <p className="no-diets">No diet info available.</p>
              )}
            </div>
            <span>
              <strong>🍽 Serves:</strong> {data.servings}
            </span>
            <span>
              <strong>⏱ Ready in:</strong> {data.readyInMinutes} mins
            </span>
            <span>
              <strong>🍲 Dish Types:</strong>{" "}
              {data.dishTypes?.join(", ") || "Not available"}
            </span>
            <button
              onClick={handleAddFav}
              className={fav.includes(id) ? "notAddtoFav" : "addToFav"}
            >
              {fav.includes(id)
                ? "💔 Remove from Favorites"
                : "❤️ Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      <div className="recipe-summary-box">
        <h2>📖 Summary</h2>
        <p
          className="recipe-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        ></p>
      </div>

      <div className="recipe-body">
        <h2>🥗 Ingredients</h2>
        <ul className="ingredients">
          {data.extendedIngredients?.map((ing) => (
            <li key={ing.id}>{ing.original}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-body">
        <h2>📝 Instructions</h2>
        {data.instructions ? (
          <p
            className="instructions-text"
            dangerouslySetInnerHTML={{ __html: data.instructions }}
          ></p>
        ) : (
          <p className="instructions-text">No instructions available.</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
