import { useContext } from "react";
import Card from "../../components/Card/Card";
import SearchField from "../../components/Search/SearchField";
import NoResults from "../../components/NoResults/NoResults";
import { DataContext } from "../../context/DataContext";
import "./Home.css";
import Loading from "../../components/Loading/Loading";

const Home = ({ loading }) => {
  const { data } = useContext(DataContext);

  return (
    <div className="home-sec">
      <SearchField />
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3 className="home-tittle">Latest Recipes</h3>
          {data.length === 0 && <NoResults />}
          <div className="card-sec">
            {data.map((recipe) => (
              <Card info={recipe} key={recipe.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
