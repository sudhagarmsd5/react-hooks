import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";

export const Header = () => {
  return (
    <nav className="nav_bar">
      <div className="flex">
        <div>
          <a href="/" style={{ cursor: "pointer" }}>
            <img src={reactLogo} alt="" />
          </a>
        </div>
        <label style={{ lineHeight: "35px", marginLeft: "5px" }}>
          React Hooks
        </label>
      </div>
      <ul>
        <li>
          <NavLink to="/">UseState</NavLink>
        </li>
        <li>
          <NavLink to="1">UseEffect</NavLink>
        </li>
        <li>
          <NavLink to="2">UseContext</NavLink>
        </li>
        <li>
          <NavLink to="3">UseReducer</NavLink>
        </li>
        <li>
          <NavLink to="4">UseCallback</NavLink>
        </li>
        <li>
          <NavLink to="5">UseMemo</NavLink>
        </li>
        <li>
          <NavLink to="6">UseRef</NavLink>
        </li>
        <li>
          <NavLink to="7">UseLayoutEffect</NavLink>
        </li>
        <li>
          <NavLink to="8">UseImperativeHandle</NavLink>
        </li>
      </ul>
    </nav>
  );
};
