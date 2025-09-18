import "./NoResults.css";

const NoResults = () => {
  return (
    <div className="no-result-wraper">
      <div className="no-results">
        <h2>No Recipes Found</h2>
        <p>🍴 No recipes found. Try searching something else!</p>
      </div>
    </div>
  );
};

export default NoResults;
