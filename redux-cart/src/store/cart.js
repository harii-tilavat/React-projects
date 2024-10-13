import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const currentItem = action.payload;
      const existingItem = state.items.find((i) => i.id === currentItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      } else {
        state.items.push({ ...currentItem, quantity: 1, totalPrice: currentItem.price });
      }
      // state.items.push();
      // console.log("ACTION : ", action);
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.changed = true;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
