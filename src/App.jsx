import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Favorite from "./pages/Favorite/Favorites";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/DataContext";
import { ErrorContext } from "./context/ErrorContext";
import axios from "axios";
import ServerError from "./components/ServerError/ServerError";
import Recipe from "./pages/Recipe/Recipe";
import Loading from "./components/Loading/Loading";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

const limit = 12;

function App() {
  const { setData } = useContext(DataContext);
  const { isError, setIsError } = useContext(ErrorContext);

  const [isLoad, setLoad] = useState(true);
  const [favRecipe, setFavRecipe] = useState(() => {
    const favorite = localStorage.getItem("favRecipe");
    return favorite ? JSON.parse(favorite) : [];
  });

  useEffect(() => {
    localStorage.setItem("favRecipe", JSON.stringify(favRecipe));
  }, [favRecipe]);

  useEffect(() => {
    axios
      .get(
        `${BaseURL}random?number=${limit}&apiKey=${apiKey}&addRecipeInformation=true`
      )
      .then((res) => {
        setData(res.data.recipes);
        setLoad(false);
      })
      .catch((err) => {
        setLoad(false);
        setIsError(err);
      });
  }, []);

  if (isLoad) return <Loading />;
  if (isError) return <ServerError />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home loading={isLoad} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite fav={favRecipe} />} />
        <Route
          path="/recipe/:id"
          element={<Recipe setFav={setFavRecipe} fav={favRecipe} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
