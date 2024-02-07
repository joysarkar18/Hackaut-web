import { HashLoader } from "react-spinners";
import React from "react";

import { LoaderContent } from "./LoaderContent";

function Loader() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen h-screen">
        <HashLoader color="#2563eb" size="100" className="" />
        <div className = "m-10 font-bold text-lg text-center"> {LoaderContent[Math.floor(Math.random() * LoaderContent.length)]}</div>
      </div>
    </>
  );
}

export default Loader;

//h-screen bg-blue-50 w-full grid place-items-center
