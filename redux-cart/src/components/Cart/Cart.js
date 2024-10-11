import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(()=>{
    
  },[cartItems]);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 &&
          cartItems.map((cartItem, index) => (
            <CartItem item={cartItem} key={cartItem.id} />
            // <li key={index}>{cartItem}</li>
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
