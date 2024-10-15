import React, { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import LoaderSpinner from "../components/LoaderSpinner";

const BASE_URL = "http://localhost:8080";
const EventsPage = () => {
  const { events } = useLoaderData();

  // console.log("DEFER EVENT DATA : ", events);
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  );
};

export default EventsPage;

async function loadEvents() {
  const response = await fetch(BASE_URL + "/events");

  if (!response.ok) {
    // ...
    return json({ message: "Could not fetch data!!!" }, { status: 500 });
  }
  const resData = await response.json();
  return resData.events;
}

export const eventsLoader = () => {
  return defer({
    events: loadEvents(),
  });
};
