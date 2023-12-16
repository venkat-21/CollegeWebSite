import "./BigSidebar.css";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.jpg";
import { AiFillHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const BigSidebar = () => {
  const links = [
    {
      text: "Home",
      path: "/home",
      id: "1",
      icon: <AiFillHome />,
    },
    {
      text: "Add College",
      path: "/home",
      id: "1",
      icon: <FaGraduationCap />,

    },
    {
      text: "Profile",
      path: "/settings",
      id: "1",
      icon: <ImProfile />,

    },
  ];
  return (
    <div className="sidebar">
      <div className={"sidebar-container"}>
        <div className="content">
          <header>
            <img src={Logo} width={250} />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, id, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={id}
                  // onClick={toggleSidebar}
                  className={"nav-link"}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSidebar;
