"use client";

// import _ from "lodash";
// import { Metadata } from "next";
// import { useState } from "react";
// import HeavyComponent from "../components/HeavyComponent";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// Only use Lazy loading for large and heavy components

// We can also lazy load modules

const Page = () => {
  // const [isVisible, setVisible] = useState(false);
  return (
    <>
      <div>Page</div>
      {/* <button onClick={() => setVisible(true)}>Show</button> */}
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [
            { name: "Harish" },
            { name: "Raghav" },
            { name: "PoPz" },
          ];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
      {/* This component is included in the response even though we are rendering it dynamically because this component is statically imported. 
      When Next.js builds our application, it adds the components to the bundles of this page. */}
    </>
  );
};

export default Page;

// Function to dynamically generate metadata for the page
// Note: In client components, function cannot be async

// export async function generateMetaData(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: product.title,
//     description: product.description,
//   };
// }
