import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload || 1;
      console.log("ACTION : ", action);
    },
    decrement(state, action) {
      state.counter--;
      console.log("ACTION : ", action);
    },
    toggle(state, action) {
      state.showCounter = !state.showCounter;
      console.log("ACTION : ", action);
    },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
