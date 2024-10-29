import "./style.scss";

import { FaUserFriends } from "react-icons/fa";
import { FaGamepad, FaHouse, FaStore } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-action flex">
      <NavLink
        className={({ isActive }) =>
          `link-action ${isActive ? "active" : "inactive"}`
        }
        to={"/"}
      >
        <FaHouse className="icon-action link" />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `link-action ${isActive ? "active" : "inactive"}`
        }
        to={"/a"}
      >
        <MdOutlineOndemandVideo className="icon-action link" />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `link-action ${isActive ? "active" : "inactive"}`
        }
        to={"/s"}
      >
        <FaUserFriends className="icon-action link" />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `link-action ${isActive ? "active" : "inactive"}`
        }
        to={"/d"}
      >
        <FaGamepad className="icon-action link" />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `link-action ${isActive ? "active" : "inactive"}`
        }
        to={"/f"}
      >
        <FaStore className="icon-action link" />
      </NavLink>
    </div>
  );
};

export default Navigation;
