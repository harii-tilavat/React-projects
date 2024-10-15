import React from "react";
// import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm.jsx";
import { useRouteLoaderData } from "react-router-dom";
const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  //   const params = useParams();
  return (
    <>
      <EventForm event={data.event} method={"PATCH"}/>
    </>
  );
};

export default EditEventPage;
