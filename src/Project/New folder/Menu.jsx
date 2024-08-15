import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {

  return (
    <>
      <div className="Navbars">
        <ul className="NavbarWrappers">
          <li className="NavbarElement">
            <NavLink className="link" to="/HotelWebsite/">
              Home
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/HotelWebsite/about">
              About Us
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link"to="/HotelWebsite/room">
              Room
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/HotelWebsite/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="HotelWebsite/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
