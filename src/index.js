import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SocketContextProvider } from "./context/SocketContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SocketContextProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </SocketContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
