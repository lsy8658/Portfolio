import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterReducer";
import paginationReducer from "./reducers/paginationReducer";
const store = configureStore({
  reducer: { counter: counterSlice, pagin: paginationReducer },
});
export default store;
