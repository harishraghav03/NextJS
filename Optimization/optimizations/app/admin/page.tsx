import { Metadata } from "next";
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

// To dynamically render the title based on Eg Product

export async function generateMetaData(): Promise<Metadata> {
  const product = await fetch("");

  return {
    title: product.title,
    description: product.description,
  };
}
