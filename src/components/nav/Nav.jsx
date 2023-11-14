import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../route/Routers";
import "./nav.scss";
import DarkModeToggle from "../darkmode/DarkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
export default function Nav() {
  const [menus, setMenus] = useState(false);
  const mobileMenuHandle = () => {
    setMenus(!menus);
  };
  return (
    <div className="nav_container">
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>SY Portfolio</Link>
          </div>
          <div className="side">
            <div className="menus">
              {routes.map((route) => (
                <Link key={route.id} to={route.path}>
                  {route.id}
                </Link>
              ))}
            </div>
            <DarkModeToggle />
            {menus ? (
              <AiOutlineClose
                size="30"
                className="mobile_menu"
                onClick={mobileMenuHandle}
              />
            ) : (
              <GiHamburgerMenu
                size="30"
                className="mobile_menu"
                onClick={mobileMenuHandle}
              />
            )}
          </div>
        </div>
      </div>

      <div className={`mobile_navbar  ${menus && "open"}`}>
        {menus && (
          <div className="menus">
            {routes.map((route) => (
              <Link key={route.id} to={route.path} onClick={mobileMenuHandle}>
                {route.id}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
