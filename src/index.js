import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SocketContextProvider } from "./context/SocketContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        {/* <SocketContextProvider> */}
        <Provider store={store}>
          <App />
        </Provider>
        {/* </SocketContextProvider> */}
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
