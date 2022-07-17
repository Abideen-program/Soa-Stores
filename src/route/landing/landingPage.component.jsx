import { Link } from "react-router-dom";
import "./landingPage.styles.scss";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="brand-container">
        <div className="animate-brand">
          <h1 className="brand-name">
            SOA <span>Clothing</span> Store
          </h1>
          <p className="slogan">Your No 1. online female clothing store</p>
        </div>
        <Link to="header">
          <button>Let's Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
