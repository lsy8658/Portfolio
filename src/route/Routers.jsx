import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChatTest from "../pages/chatTest/ChatTest";
import Test from "../pages/test/Test";
import Contacts from "../pages/contacts/Contacts";
import Project from "../pages/project/Project";
import Profile from "../pages/profile/Profile";
import Board from "../pages/board/Board";
import Viewer from "../pages/board/viewer/Viewer";
import CreatePost from "../pages/board/create/CreatePost";
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
    path: "/board",
    id: "Board",
    element: <Board />,
  },
  {
    path: "/contacts",
    id: "Contacts",
    element: <Contacts />,
  },
  {
    path: "/viewer/:id",
    id: "Viewer",
    sub: true,
    element: <Viewer />,
  },
  {
    path: "/createPost",
    id: "CreatePost",
    sub: true,
    element: <CreatePost />,
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
