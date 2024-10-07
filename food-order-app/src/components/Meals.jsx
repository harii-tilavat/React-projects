import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const baseUrl = "http://localhost:3000";
export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch(baseUrl + "/meals");

        if (!response.ok) {
          // ...
        }
        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        console.error("EERROORR : ", error);
      }
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
