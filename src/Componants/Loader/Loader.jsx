import { HashLoader } from "react-spinners";
import React from "react";

function Loader() {
  return (
    <div className="h-screen bg-blue-50 w-full grid place-items-center">
      <HashLoader
        color="#2563eb"
        size="100"
        className="w-40 h-40"
      />
    </div>
  );
}

export default Loader;
