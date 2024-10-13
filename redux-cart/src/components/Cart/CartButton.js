import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui.js";
const CartButton = (props) => {
  const totalCart = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCart}</span>
    </button>
  );
};

export default CartButton;
