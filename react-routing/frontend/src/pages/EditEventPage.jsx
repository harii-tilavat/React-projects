import React from "react";
// import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm.jsx";
import { useRouteLoaderData } from "react-router-dom";
const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  //   const params = useParams();
  //   console.log("PARAMS : ", params);
  return (
    <>
      <EventForm event={data.event} />
    </>
  );
};

export default EditEventPage;
