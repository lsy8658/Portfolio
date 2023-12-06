import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SocketContextProvider } from "./context/SocketContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={client}>
          {/* <SocketContextProvider> */}
          <Provider store={store}>
            <App />
          </Provider>
          {/* </SocketContextProvider> */}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
