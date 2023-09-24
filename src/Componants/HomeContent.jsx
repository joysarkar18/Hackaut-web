import React from "react";

const HomeContent = () => {
  return (
    <div className="px-4 py-16 mx-auto md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="p-8 rounded-2xl shadow-md border-4 border-blue-400 sm:p-16 bg-white">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Curated{" "}
              <span className="inline-block text-blue-400">Resources</span>
              {" "}For You
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
              With a dedicated team of experts and a commitment to excellence,
              we offer cutting-edge solutions in cybersecurity, software
              development, and IT consulting. We believe that knowledge should
              be shared, and that's why we provide valuable resources and
              training to help you stay ahead in this fast-paced world. Join us
              on our journey to explore the limitless possibilities of
              technology.
            </p>
            <a
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
            >
              Learn DSA & Development
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
