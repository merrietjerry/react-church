import React from "react";
import { NavLink } from "react-router-dom";

export function NavigationMenu(props) {
  return (
    <ul className="navbar-nav mr-auto w-100 justify-content-end">
      {props.menuItems.map((val, i) => (
        <li className="nav-item" key={`k-${i}`}>
          <NavLink
            to={val.field_menu_url === "home" ? "" : val.field_menu_url}
            exact
            className="nav-link page-scroll"
          >
            {val.field_menu_label}
          </NavLink>
        </li>
      ))}

      <li className="nav-item">
        <NavLink to="/login" exact className="nav-link page-scroll">
          {props.user.phone ? "Logout" : "Login"}
        </NavLink>
      </li>

      {localStorage.getItem("user") && (
        <li>
          <NavLink to="/dashboard" exact className="nav-link page-scroll">
            Dashboard
          </NavLink>
        </li>
      )}
      {localStorage.getItem("user") && (
        <li>
          <NavLink to="/register" exact className="nav-link page-scroll">
            Add User
          </NavLink>
        </li>
      )}
    </ul>
  );
}
