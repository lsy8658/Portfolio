import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../route/Routers";
export default function Nav() {
  return (
    <>
      {routes.map((route) => (
        <Link key={route.id} to={route.path}>
          {route.id}
        </Link>
      ))}
    </>
  );
}
