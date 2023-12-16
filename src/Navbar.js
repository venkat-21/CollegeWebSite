import "./Navbar.css";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <FaAlignLeft color="#45B6C9" />
        </button>

        <h3 className="logo-text">College Cracker</h3>

        <div className="btn-container">
          <button type="button" className="btn btn-navbar">
            <FaUserCircle />
            {"User"}
            <FaCaretDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
