import { BeatLoader } from "react-spinners";
import React from "react";

function Loader() {
  return (
    <div className="h-screen bg-blue-50 w-full">
      <BeatLoader
        color="#2563eb"
        size="50"
        className="top-1/2 left-1/2 absolute transform -translate-x-1/2"
      />
    </div>
  );
}

export default Loader;
