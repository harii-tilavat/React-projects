import { BASE_URL } from "../util";
import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const fetchCartData = () => {
  return async (dispatch) => {
    // dispatch(uiActions.showNotification({ status: "pending", title: "Fetching...", message: "Fetching cart data!" })); // Showing intial fetching notification
    const fetchData = async () => {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }

      return await response.json();
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({ ...cartData, items: cartData.items || [] }));
      //   dispatch(uiActions.showNotification({ status: "success", title: "Fetched!", message: "Fetched cart data successfully!" }));
      return cartData;
    } catch (error) {
      dispatch(uiActions.showNotification({ status: "error", title: "Error!", message: "Fetching cart data failed!" }));
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({ status: "pending", title: "Sending...", message: "Sending cart data!" }));

    const sendData = async () => {
      const response = await fetch(BASE_URL, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Failed to send data!");
      }
    };
    try {
      await sendData();
      dispatch(uiActions.showNotification({ status: "success", title: "Success!", message: "Sent cart data successfully!" }));
    } catch (error) {
      dispatch(uiActions.showNotification({ status: "error", title: "Error!", message: "Sending cart data failed!" }));
      console.error("ERROR ===>>> ", error);
    }
  };
};
