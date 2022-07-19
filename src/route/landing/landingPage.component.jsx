import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
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
          <Button type='text' buttonType={'inverted'}>Let's Shop</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
