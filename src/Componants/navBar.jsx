import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about us" },
  { id: 3, link: "resources" },
  { id: 4, link: "our Team" },
  { id: 5, link: "alumni" },
  { id: 6, link: "gallery" },
  { id: 7, link: "contact Us" },
];

export const NavBar = (props) => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed">
      <div className="flex text-xs">
        <h1 className="text-3xl mx-3 font-mark">HACKAUT</h1>
      </div>

      <div className="flex">
        <ul className="hidden md:flex">
          {links.map((link) => {
            return (
              <i
                key={link.id}
                className="px-4 cursor-pointer font-medium capitalize text-gray-900 hover:scale-110 duration-200"
              >
                <Link to={link.link} smooth duration={500}>
                  {link.link}
                </Link>
              </i>
            );
          })}
        </ul>
        <div className="w-12"></div>
      </div>

      <div
        onClick={() => {
          props.setNav(!props.nav);
        }}
        className="cursor-pointer text-gray-600 z-10 md:hidden"
      >
        {props.nav ? (
          <FaTimes size={30}></FaTimes>
        ) : (
          <FaBars size={30}></FaBars>
        )}
      </div>

      {props.nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-600 z-9">
          {links.map((link) => {
            return (
              <i
                key={link.id}
                className="px-4 cursor-pointer font-bold capitalize text-gray-900 hover:scale-110 duration-200 pt-10 z-10"
              >
                <Link
                  onClick={() => {
                    props.setNav(!props.nav);
                  }}
                  to={link.link}
                  smooth
                  duration={500}
                >
                  {link.link}
                </Link>
              </i>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
