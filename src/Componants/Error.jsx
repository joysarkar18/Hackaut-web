import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section class="page_404 font-mono font-bold">
      <div class="container1">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <NavLink to="/" className="link_404 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Go to Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
