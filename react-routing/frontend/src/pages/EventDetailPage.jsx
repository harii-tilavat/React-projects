import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  console.log("PARAMS : ", params);
  return (
    <>
      <h1>EventDetailPage works!</h1>
      <p>{params['id']}</p>
    </>
  );
};

export default EventDetailPage;
