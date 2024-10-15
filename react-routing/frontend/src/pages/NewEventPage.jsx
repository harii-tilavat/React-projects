import React from "react";
import EventForm from "../components/EventForm";
import { json , redirect} from "react-router-dom";
const BASE_URL = "http://localhost:8080";
const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const eventAction = async ({ request, params }) => {
  console.log("ACTION REQEST : ", request);
  const data = await request.formData();
  const eventData = Object.fromEntries(data.entries());
  const response = await fetch(BASE_URL + "/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }
  return redirect('/events');
};
