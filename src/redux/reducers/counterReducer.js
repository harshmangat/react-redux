import { createReducer } from "@reduxjs/toolkit";

import {
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_COUNT,
} from "../actions/counterActions";

const initialState = {
  count: 0,
};

const counterReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(INCREMENT, (state, action) => {
      state.count++;
    })
    .addCase(DECREMENT, (state, action)=> {
      state.count--;
    })
    .addCase(RESET, (state, action) => {
      state.count = 0;
    })
    .addCase(ADD_COUNT, (state, action) => {
      state.count += action.payload
    })
  }
);

export default counterReducer;