import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-light text-center mt-5 ">
      <h1 className="display-2 fw-normal text-danger">404</h1>
      <h4>Page not found</h4>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default NotFound;
