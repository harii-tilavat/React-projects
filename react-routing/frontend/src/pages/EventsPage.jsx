import React from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

const BASE_URL = "http://localhost:8080";
const EventsPage = () => {
  const data = useLoaderData();
  return <>{<EventsList events={data.events} />}</>;
};

export default EventsPage;
export const eventsLoader = async () => {
  const response = await fetch(BASE_URL + "/events");

  if (!response.ok) {
    // ...
    return json({ message: "Could not fetch data!!!" }, { status: 500 });
  }
  return response;
};
