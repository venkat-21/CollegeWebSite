import "./LandingPage.css";
import LandingPageImage from "./assets/landingpageimage.svg";
import Logo from "./assets/logo.jpg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <nav>
        <img src={Logo} width={250} />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Track <span>colleges</span> you applied for!
          </h1>
          <p>
            Keep a track of all the colleges you have applied for at a single
            place.
          </p>
          <Link to="/register">
            <button className="btn">Register/Login</button>
          </Link>
        </div>
        <img src={LandingPageImage} className="main-img" width={600} />
      </div>
    </div>
  );
}

export default LandingPage;