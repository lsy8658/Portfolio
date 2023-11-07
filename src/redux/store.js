import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterReducer";
import weatherSlice from "./reducers/weatherReducer";
const store = configureStore({
  reducer: { counter: counterSlice, weather: weatherSlice },
});
export default store;
