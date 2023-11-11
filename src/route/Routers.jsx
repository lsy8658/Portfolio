import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ChatTest from "../pages/chatTest/ChatTest";
import Test from "../pages/test/Test";
export const routes = [
  {
    path: "/",
    id: "Home",
    element: <Home />,
  },
  {
    path: "/chatRoom/:id",
    id: "ChatRoom",
    element: <Test />,
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
