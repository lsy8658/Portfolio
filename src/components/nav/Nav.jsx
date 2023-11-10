import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../route/Routers";
import "./nav.scss";
import DarkModeToggle from "../darkmode/DarkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [menus, setMenus] = useState(false);
  const mobileMenuHandle = () => {
    setMenus(!menus);
  };
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">SY Portfolio</div>
          <div className="side">
            <div className="menus">
              {routes.map((route) => (
                <Link key={route.id} to={route.path}>
                  {route.id}
                </Link>
              ))}
            </div>
            <DarkModeToggle />
            <GiHamburgerMenu
              size="30"
              className="mobile_menu"
              onClick={mobileMenuHandle}
            />
          </div>
        </div>
      </div>
    </>
  );
}
