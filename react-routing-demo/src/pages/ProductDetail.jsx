import React from "react";
import { Link, useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  console.log("PARAMS : ", params);
  return (
    <>
      <h1>ProductDetail works!</h1>
      <p>{params['id']}</p>
      <p><Link to=".." relative="path">Go back...</Link></p>
    </>
  );
};

export default ProductDetail;
