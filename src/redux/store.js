import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterReducer";
const store = configureStore({
  reducer: { counter: counterSlice },
});
export default store;
