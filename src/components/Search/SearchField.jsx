import "./SearchField.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

const SearchField = () => {
  const [search, setSearch] = useState("");
  const { setData } = useContext(DataContext);

  const handleSubmit = () => {
    axios
      .get(
        `${BaseURL}complexSearch?query=${search}&addRecipeInformation=true&apiKey=${apiKey}`
      )
      .then((res) => setData(res.data.results));

    setSearch("");
  };

  return (
    <div className="search-sec">
      <input
        type="text"
        className="input"
        placeholder="Search Recipe..."
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={handleSubmit}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchField;
