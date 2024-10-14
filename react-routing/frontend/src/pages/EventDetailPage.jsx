import React from "react";
import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";
const BASE_URL = "http://localhost:8080";
const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  console.log("DATA : ", data);
  return <EventItem event={data && data.event} />;
};

export default EventDetailPage;
export const eventLoader = async ({ request, params }) => {
  const response = await fetch(BASE_URL + "/events/" + params["id"]);
  if (!response.ok) {
    return json({ message: "Could not fetch event" }, { status: 500 });
  }
  return response;
};
