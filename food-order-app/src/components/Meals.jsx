import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const requestConfig = {};
const baseUrl = "http://localhost:3000";

export default function Meals() {
  const { data: loadedMeals, error, isLoading, sendRequest } = useHttp(baseUrl + "/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching data...</p>;
  }

  if (error) {
    return <ErrorPage title={"Failed to fetch meals."} message={error} />;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
