const baseUrl = "http://localhost:3000";
import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
export default function MealItem({ meal }) {
  const cartContext = useContext(CartContext);
  function handleAddMealToCart(meal) {
    cartContext.addItem(meal);
  }
  return (
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={baseUrl + "/" + meal.image} alt="image" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price * 30)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => handleAddMealToCart(meal)}>Add to cart</Button>
        </p>
        <h1>
          {cartContext.items.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </h1>
      </article>
    </li>
  );
}
