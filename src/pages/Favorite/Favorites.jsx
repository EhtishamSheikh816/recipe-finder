import { useContext, useEffect, useState } from "react";
import "./Favorites.css";
import axios from "axios";
import { ErrorContext } from "../../context/ErrorContext";
import ServerError from "../../components/ServerError/ServerError";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

const Favorites = ({ fav }) => {
  const navigate = useNavigate();
  const { setIsError, isError } = useContext(ErrorContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = fav.join(",");
    axios
      .get(`${BaseURL}informationBulk?ids=${ids}&apiKey=${apiKey}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => setIsError(err));
  }, []);

  if (loading) return <Loading />;
  if (isError) return <ServerError />;
  if (fav.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>💔 No Favorites Yet</h2>
        <p>Save your favorite recipes and they’ll appear here!</p>
        <button className="browse-btn" onClick={() => navigate("/")}>
          Browse Recipes
        </button>
      </div>
    );
  }
  return (
    <div className="favorites-page">
      <h1 className="favorites-title">❤️ My Favorite Recipes</h1>

      <div className="fav-card-sec">
        {data.map((recipe) => (
          <Card info={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
