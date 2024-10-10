import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../store/products";
const CartButton = (props) => {
  const productState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("PRODUCT STATE : ", productState);

  function handleClick() {
    dispatch(productActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
