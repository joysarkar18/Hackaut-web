import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: 1, link: "Home" },
  { id: 2, link: "About Us" },
  { id: 3, link: "Resources" },
  { id: 4, link: "Our Team" },
  { id: 5, link: "Alumni" },
  { id: 6, link: "Gallery" },
  { id: 7, link: "Contact Us" },
];

const NavBar2 = (props) => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-300 text-sm py-4">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a className="flex-none text-xl font-semibold" href="#">
            HACKAUT
          </a>

          <div className="sm:hidden">
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
            <div class="w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                {links.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                        href="#"
                        aria-current="page"
                      >
                        <Link to={link.link} smooth duration={500}>
                          {link.link}
                        </Link>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            {links.map((link) => {
              return (
                <a
                  key={link.id}
                  className="font-medium text-gray-600 hover:text-gray-400"
                  href="#"
                  aria-current="page"
                >
                  <Link to={link.link} smooth duration={500}>
                    {link.link}
                  </Link>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar2;
