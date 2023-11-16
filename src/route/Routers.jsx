import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChatTest from "../pages/chatTest/ChatTest";
import Test from "../pages/test/Test";
import About from "../pages/about/About";
import Project from "../pages/project/Project";
import Profile from "../pages/profile/Profile";
import Board from "../pages/board/Board";
import Viewer from "../pages/board/viewer/Viewer";
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
  {
    path: "/board",
    id: "Board",
    element: <Board />,
  },
  {
    path: "/viewer/:id",
    id: "Viewer",
    element: <Viewer />,
  },
];

export const Routers = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.id} path={route.path} element={route.element}>
            {route.path}
          </Route>
        );
      })}
    </Routes>
  );
};
