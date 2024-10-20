import React, { Suspense } from "react";
import { useRouteLoaderData, json, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import LoaderSpinner from "../components/LoaderSpinner";
import { getAuthToken } from "../util/auth";
const BASE_URL = "http://localhost:8080";
const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Await resolve={event}>{(loadedEvent) => <EventItem event={loadedEvent} />}</Await>
      </Suspense>

      <Suspense fallback={<LoaderSpinner />}>
        <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch(BASE_URL + "/events/" + id);
  if (!response.ok) {
    return json({ message: "Could not fetch event" }, { status: 500 });
  }
  const resData = await response.json();
  return resData.event;
};

const loadEvents = async () => {
  const response = await fetch(BASE_URL + "/events");

  if (!response.ok) {
    // ...
    return json({ message: "Could not fetch data!!!" }, { status: 500 });
  }
  const resData = await response.json();
  return resData.events;
};

export const eventLoader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params["id"]),
    events: loadEvents(),
  });
};

export const deleteEventAction = async ({ request, params }) => {
  const response = await fetch(BASE_URL + "/events/" + params["id"], {
    method: request.method,
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });
  if (!response.ok) {
    return json({ message: "Could not delete the event!!!" }, { status: 500 });
  }
  return redirect("/events");
};
