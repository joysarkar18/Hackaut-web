import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom instead of react-scroll
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: 1, link: "Home", path: "/" },
  { id: 2, link: "About Us", path: "/about" },
  { id: 3, link: "Resources", path: "/resources" },
  { id: 4, link: "Our Team", path: "/team" },
  { id: 5, link: "Alumni", path: "/alumni" },
  { id: 6, link: "Gallery", path: "/gallery" },
  { id: 7, link: "Contact Us", path: "/contact" },
];

const NavBar2 = (props) => {
  return (
    <header className="flex flex-wrap md:justify-start sm:flex-nowrap z-50 w-full bg-blue-200 text-sm py-4 border-b-2 border-blue-700 sticky top-0">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="/" className="flex-none text-xl font-black"> {/* Use Link instead of <a> */}
            HACKAUT
          </NavLink>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              onClick={() => {
                props.setNav(!props.nav);
              }}
            >
              {props.nav ? (
                <FaTimes size={15}></FaTimes>
              ) : (
                <FaBars size={15}></FaBars>
              )}
            </button>
          </div>

          {props.nav && (
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                {links.map((link) => {
                  return (
                    <li key={link.id}>
                      <NavLink
                        to={link.path} // Use Link instead of <a> and remove smooth and duration attributes
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                        aria-current="page"
                      >
                        {link.link}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end md:mt-0 sm:pl-5">
            {links.map((link) => {
              return (
                <NavLink // Use Link instead of <a> and remove smooth and duration attributes
                  key={link.id}
                  to={link.path}
                  className="font-bold text-blue-900 hover:text-blue-400"
                  aria-current="page"
                >
                  {link.link}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar2;
