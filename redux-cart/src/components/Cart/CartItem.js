import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { productActions } from "../../store/products";

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;
  const total = quantity * price;
  const dispatch = useDispatch();
  function handleIncrement(item) {
    dispatch(productActions.addItemToCart(item));
  }
  function handleDecrement(id) {
    dispatch(productActions.removeItemToCart(id));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleDecrement(id)}>-</button>
          <button onClick={() => handleIncrement({ id, title, quantity, price })}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
