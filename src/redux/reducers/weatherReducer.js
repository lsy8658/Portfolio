import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  myLocation: {
    lat: 0,
    lon: 0,
  },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.myLocation.lat = action.payload.lat;
      state.myLocation.lon = action.payload.lng;
    },
  },
});

export const { setCurrentLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
