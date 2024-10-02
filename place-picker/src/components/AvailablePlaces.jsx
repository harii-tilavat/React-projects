import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import {fetchAvailablePlace} from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true);
        const places = await fetchAvailablePlace();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "Something went wrong!" });
        setIsFetching(false);
      }
    };
    getData();
  }, []);

  if (error) {
    return <ErrorPage title={"An error occured"} message={error.message} />;
  }
  return <Places isLoading={isFetching} loadingText={"Loading"} title="Available Places" places={availablePlaces} fallbackText="No places available." onSelectPlace={onSelectPlace} />;
}
