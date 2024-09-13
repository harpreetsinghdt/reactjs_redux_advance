import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    sample_method() {
      console.log("ui sample method called.");
    },
    toggel(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotify(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
