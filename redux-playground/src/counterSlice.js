import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 19,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, actions) => {
      state.count = state.count + 1;
    },
    decrease: (state, actions) => {
      state.count = state.count - 1;
    },
  },
});

// const counterSlice = {reducer, action}

const { reducer, actions } = counterSlice;
export const { increase, decrease } = actions;



export default reducer;
