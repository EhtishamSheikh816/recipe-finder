import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-sec">
      <p>
        &copy; {year} Cook Find. All rights reserved, Made by{" "}
        <span className="footer-name">Ehtisham.</span>
      </p>
    </div>
  );
};

export default Footer;
