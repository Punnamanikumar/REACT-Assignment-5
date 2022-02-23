import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <NavLink
          to="/home"
          style={({ isActive }) => {
            return {
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            };
          }}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/students"
          style={({ isActive }) => {
            return {
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            };
          }}
        >
          Students
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/contactus"
          style={({ isActive }) => {
            return {
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            };
          }}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
