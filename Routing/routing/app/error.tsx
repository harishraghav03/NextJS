"use client";

import Error from "next/error";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

// Next JS automatically adds reset func into our component
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has occured.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
