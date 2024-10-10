import { createStore } from "redux";


const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    console.log("ACTION : ", action);
    console.log("STATE : ", state);
    return {
      ...state,
      counter: state.counter + action.payload.count,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "toggle") {
    return { ...state, showCounter: !state.showCounter };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
