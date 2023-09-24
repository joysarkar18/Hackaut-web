import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const links = [
  { id: 1, link: "About Us", path: "/about" },
  { id: 2, link: "Resources", path: "/resources" },
  { id: 3, link: "Our Team", path: "/team" },
  { id: 4, link: "Alumni", path: "/alumni" },
  { id: 5, link: "Gallery", path: "/gallery" },
];

const links2 = [
  { id: 1, link: "Membership Form", path: "*" },
  { id: 2, link: "Contact Us", path: "/contact" },
];

export const Footer = () => {
  return (
    <div classname="bg-blue-100">
      <div className="relative bg-blue-700">
        {/* <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 bg-blue-100 text-blue-700"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg> */}
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="text-xl font-bold tracking-wide text-gray-100 uppercase">
                  HACKAUT
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-white">
                  In our development community, we focused on brushing up
                  skills, team management, etc. Mainly we provide knowledge on
                  various technologies and try to build influential
                  communication network among all programmer by online meetings.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-4 lg:col-span-4">
              <div>
                <p className="font-semibold tracking-wide text-white">
                  Sections
                </p>
                <ul className="mt-2 space-y-2">
                  {links.map((link) => {
                    return (
                      <li key={link.id}>
                        <Link
                          to={link.path}
                          className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                        >
                          {link.link}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white">
                  External Links
                </p>
                <ul className="mt-2 space-y-2">
                  {links2.map((link) => {
                    return (
                      <li key={link.id}>
                        <Link
                          to={link.path}
                          className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                        >
                          {link.link}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-white sm:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright 2023 HACKAUT Inc. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                className="transition-colors duration-300 text-white"
              >
                <FaFacebook size={24}></FaFacebook>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-white"
              >
                <FaGithub size ={24}></FaGithub>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-white"
              >
                <FaTwitter size={24}></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
