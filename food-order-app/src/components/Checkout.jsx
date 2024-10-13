import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const baseUrl = "http://localhost:3000";
const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce((totalAmount, item) => totalAmount + item.quantity * item.price, 0);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp(baseUrl + "/orders", requestConfig);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }
  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }
  async function handleCheckout(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest({
      order: {
        items: cartCtx.items,
        customer: customerData,
      },
    });
  }
  let actions = (
    <>
      <Button textOnly onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Go To Checkout</Button>
    </>
  );
  if (isSending) {
    actions = <span>Sending order...</span>;
  }
  if (data && !error) {
    return (
      <Modal className="modal" open={userProgressCtx.progress === "checkout"} onClose={handleCloseCheckout}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal className="modal" open={userProgressCtx.progress === "checkout"} onClose={handleCloseCheckout}>
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
        {error && <ErrorPage title={"Failed to place order!"} message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
