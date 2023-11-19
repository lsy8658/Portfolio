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
  },
});

export const { setNewArray, reset } = paginationSlice.actions;
export default paginationSlice.reducer;
