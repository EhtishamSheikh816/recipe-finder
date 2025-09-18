import "./ServerError.css";

const ServerError = () => {
  return (
    <div className="error-wrapper">
      <div className="error-box">
        <h2>⚠️ Server Error</h2>
        <strong>Oops! Something went wrong while fetching recipes.</strong>
        <p>Possible reason: API request limit reached (50 per day)</p>
        <small>Please try again later 🔄</small>
      </div>
    </div>
  );
};

export default ServerError;
