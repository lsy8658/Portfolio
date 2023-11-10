import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChatTest from "../pages/chatTest/ChatTest";

export const routes = [
  {
    path: "/",
    id: "Home",
    element: <Home />,
  },
  {
    path: "/chatRoom/:id",
    id: "ChatRoom",
    element: <ChatTest />,
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
