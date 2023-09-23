import React from "react";
import { Cards } from "./Cards";

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          All About HACKAUT
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Exploring Excellence: Where Resources Meet Innovation, Teamwork
          Inspires Success, Alumni Leave Their Mark, and Creativity Comes to
          Life.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Cards
          title="Learn to Code"
          description="Empowering Growth: Your Gateway to Knowledge and Tools."
          button="Explore Resources"
          link="/resources"
        />
        <Cards
          title="Let's know Each other"
          description="Our Team: Igniting Innovation, Fueling Dreams."
          button="Know about Our Team"
          link="/team"
        />
        <Cards
          title="Going in Footsteps"
          description="Alumni: Pioneering Success, Shaping Tomorrow."
          button="Connect with Alumnis"
          link="/alumni"
        />
        <Cards
          title="Happy Happy Moments"
          description="Capturing Moments, Creating Memories."
          button="Check out Past Events"
          link="/gallery"
        />
      </div>
    </div>
  );
};
