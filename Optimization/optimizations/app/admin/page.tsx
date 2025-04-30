import { Metadata } from "next";
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

// Function to dynamically generate metadata for the page

export async function generateMetaData(): Promise<Metadata> {
  const product = await fetch("");

  return {
    title: product.title,
    description: product.description,
  };
}
