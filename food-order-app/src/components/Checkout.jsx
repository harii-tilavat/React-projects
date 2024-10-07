import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";

const baseUrl = "http://localhost:3000";
export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce((totalAmount, item) => totalAmount + item.quantity * item.price, 0);
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }
  function handleCheckout(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    console.log("FORM DATA : ", customerData);
    fetch(baseUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      },
    });
  }

  return (
    <Modal className="modal" open={userProgressCtx.progress === "checkout"} confirmText="Submit Order" onClose={handleCloseCheckout} showNext onNext={handleCheckout} type="submit">
      <form id="form" onSubmit={handleCheckout}>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(totalAmount)}</p>

        <Input name="name" id="name" type="text" label="Full name" />
        <Input name="email" id="email" type="email" label="Email Address" />
        <Input name="street" id="street" type="text" label="Street" />
        <div className="control-row">
          <Input name="postal-code" id="postal-code" type="text" label="Postal Code" />
          <Input name="city" id="city" type="text" label="City" />
        </div>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button>Go To Checkout</Button>
        </p>
      </form>
    </Modal>
  );
}
