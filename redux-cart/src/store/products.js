import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: true,
  items: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      let updatedItem = action.payload;
      const updatedItemIndex = state.items.findIndex((i) => i.id === updatedItem.id);
      if (updatedItemIndex > -1) {
        updatedItem = { ...updatedItem, quantity: state.items[updatedItemIndex].quantity + 1 };
        state.items[updatedItemIndex] = updatedItem;
      } else {
        updatedItem = { ...updatedItem, quantity: 1 };
        state.items.push(updatedItem);
      }
      // state.items.push();
      // console.log("ACTION : ", action);
      console.log("ITEM : ", updatedItem);
    },
    removeItemToCart(state, action) {
      const currentItem = state.items.find((i) => i.id === action.payload);
      const currentItemIndex = state.items.findIndex((i) => i.id === action.payload);
      if (currentItem && currentItem.quantity === 1) {
        state.items.splice(currentItemIndex, 1);
      } else {
        state.items[currentItemIndex] = { ...currentItem, quantity: currentItem.quantity - 1 };
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const productActions = productsSlice.actions;
export default productsSlice.reducer;
