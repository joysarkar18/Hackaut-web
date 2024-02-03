import React from 'react';
import {FaLinkedin , FaLinkedinIn , FaFacebook , FaInstagram , FaGithub} from "react-icons/fa" ;
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" lg:px-16 bg-blue-200 pt-8 pb-6 border-t-2 border-blue-700">
      <div className="container1 mx-auto px-4">
        <div className="lg:flex lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-bold text-black">HACKAUT</h4>
            <h5 className="text-lg mt-0 mb-2 text-blue-800">
            In our development community, we focused on brushing up
                  skills, team management and verious other aspects of professional life . 
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
                <a href='/'>
              <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none"  type="button">
                <FaLinkedin className="fab fa-linkedin" ></FaLinkedin>
              </button>
              </a>
              <a href='/'>
              <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                <FaFacebook className="fab"></FaFacebook>
              </button>
              </a>
              <a href='/'>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                <FaInstagram className="fab fa-dribbble"></FaInstagram>
              </button>
              </a>
              <a href='/'>
              <button className="bg-white text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                <FaGithub className="fab fa-github"></FaGithub>
              </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 ">
            <div className="lg:flex lg:items-top mb-6 md:flex sm:flex">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-disc list-inside text-blueGray-600">
                  <li className="mb-2">
                    <a className="hover:text-gray-800 font-semibold text-sm" href="/about">About Us</a>
                  </li>
                  <li className="mb-2">
                    <a className=" hover:text-gray-800 font-semibold text-sm" href="/blog">Blog</a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:text-gray-800 font-semibold text-sm" href="/">Github</a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:text-gray-800 font-semibold text-sm" href="/">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 ">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-disc list-inside text-blueGray-600">
                  <li className="mb-2">
                    <a className="hover:text-gray-800 font-semibold text-sm" href="/lisence">License</a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:text-gray-800 font-semibold text-sm" href="/terms&condition">Terms &amp; Conditions</a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:text-gray-800 font-semibold text-sm" href="/privacy">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:text-gray-800 font-semibold text-sm" href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
              <div className="hover:text-gray-800 cursor-pointer" >
              HACKAUT Inc. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
