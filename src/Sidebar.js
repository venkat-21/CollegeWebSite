import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    {
      text: "Home",
      to: "/home",
      icon: <AiFillHome />,
    },
    {
      text: "Add College",
      to: "/add-college",
      icon: <FaGraduationCap />,
    },
    {
      text: "Settings",
      to: "/settings",
      icon: <CiSettings />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="nav-links">
          {links.map((link) => {
            return (
              <NavLink to={link.to} className="nav-link">
                <span className="icon">{link.icon}</span>
                {link.text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
