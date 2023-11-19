import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataArray: [],
};

export const paginationSlice = createSlice({
  name: "pagin",
  initialState,
  reducers: {
    setNewArray: (state, action) => {
      state.dataArray = action.payload;
    },
    boardReset: (state) => {
      state.dataArray = [];
    },
  },
});

export const { setNewArray, boardReset } = paginationSlice.actions;
export default paginationSlice.reducer;
