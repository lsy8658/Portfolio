import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChatTest from "../pages/chatTest/ChatTest";
import Test from "../pages/test/Test";
import About from "../pages/about/About";
import Project from "../pages/project/Project";
import Profile from "../pages/profile/Profile";

export const routes = [
  {
    path: "/",
    id: "Home",
    element: <Home />,
  },
  {
    path: "/profile",
    id: "Profile",
    element: <Profile />,
  },
  {
    path: "/project",
    id: "Project",
    element: <Project />,
  },
  {
    path: "/about",
    id: "About",
    element: <About />,
  },
];

export const Routers = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element}>
          {route.path}
        </Route>
      ))}
    </Routes>
  );
};
