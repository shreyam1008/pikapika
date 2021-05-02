import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  //reducers for setting things to the store
  reducers: {
    setSomething: (state, action) => {
      state.something = action.payload.something;
    },
  },
});

export const { setSomething } = uiSlice.actions;

//for selecting the items in store
export const selectSomething = (state) => state.ui.something;

export default uiSlice.reducer;
