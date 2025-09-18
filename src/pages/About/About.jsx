import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-sec">
        <h1 className="about-tittle">About This Projects</h1>
        <p className="about-para">
          <strong>Recipe Finder </strong>
          is a React-based web application that allows users to discover and
          explore delicious recipes from the Spoonacular API. Users can browse
          random recipes, view detailed information like ingredients and
          instructions, and save their favorite recipes for quick access later.
          This project helped me practice real-world skills like API
          integration, React Router, state management, and modular CSS styling.
        </p>

        <h2 className="about-subHeading">About Me</h2>
        <p className="about-para">
          Hi! I’m <strong>Muhammad Ehtisham</strong>, a passionate web developer
          currently learning React, backend technologies, and modern web
          development practices. Building projects like Recipe Finder allows me
          to sharpen my problem-solving skills and improve my understanding of
          frontend development.
        </p>

        <h2 className="about-subHeading">Let’s Connect</h2>
        <ul className="about-links">
          <li>
            📂 Repo:{" "}
            <a
              href="https://github.com/EhtishamSheikh816/recipe-finder"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ehtishamsheikh816/recipe-finder
            </a>
          </li>
          <li>
            💻 GitHub:{" "}
            <a
              href="https://github.com/ehtishamsheikh816"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ehtishamsheikh816
            </a>
          </li>
          <li>
            📧 Email:{" "}
            <a
              href="mailto:ehtisham010101@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ehtisham010101@gmail.com
            </a>
          </li>
          <li>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/muhammad-ehtisham-35851b2b4/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/muhammad-ehtisham
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
