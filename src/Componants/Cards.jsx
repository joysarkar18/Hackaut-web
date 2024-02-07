import React from "react";

export const Cards = (props) => {
  return (
    <div className="flex flex-col justify-between p-5 border rounded-lg shadow-sm hover:shadow-xl transition duration-300 cursor-default bg-white">
      <div>
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
          <svg
            className="w-12 h-12 text-blue-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <h6 className="mb-2 font-semibold leading-5">{props.title}</h6>
        <p className="mb-3 text-sm text-gray-900">{props.description}</p>
      </div>
      <a
        href={props.link}
        aria-label=""
        className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
      >
        {props.button}
      </a>
    </div>
  );
};
