import React from "react";
import { FaDisplay, FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Form = () => {
  return (
    <div className="bodyc">
      <div className="contacthakaut">
        <div class="container text-blue-800 border-4 border-blue-400">
          <div class="content">
            <div class="left-side">
              <div class="address details">
                {/* <i class="fas fa-map-marker-alt"><FaLocationDot/></i>  */}
                <i
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="fas fa-envelope"
                >
                  <FaLocationDot />
                </i>
                <div class="topic">Address</div>
                <div class="text-one">MAKAUT , WB, NH12</div>
                <div class="text-two">Haringhata</div>
              </div>
              <div class="phone details">
                <i
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="fas fa-envelope"
                >
                  <FaPhone />
                </i>
                {/* <i class="fas fa-phone-alt"><FaPhone/></i>  */}
                <div class="topic">Phone</div>
                <div class="text-one">+91 9064364294</div>
                <div class="text-two">+91 9474798583</div>
              </div>
              <div class="email details">
                {/* <i class="fas fa-envelope"><FaEnvelope/></i>  */}
                {/* <i class="fas fa-envelope"><FaEnvelope/></i>  */}
                <i
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="fas fa-envelope"
                >
                  <FaEnvelope />
                </i>
                {/* code ends */}
                <div className="icon">{/* <FaEnvelope/> */}</div>
                <div class="topic">Email</div>
                <div class="text-one">wecare@gmail.com</div>
                <div class="text-two">ouremail@gmail.com</div>
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Send us a message</div>
              <p>
                If you have any coding projects or queries related to our coding
                club, feel free to reach out. We're here to assist you, and it's
                our pleasure to help!
              </p>
              <form action="#" class="text-center">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div class="input-box message-box">
                  <div class="input-box">
                    <input type="text" placeholder="Enter your query" />
                  </div>
                </div>
                <div class="button bg-blue-600 hover:bg-blue-800 rounded-lg">
                  {/* <input type="button" value="Send Now"/>  */}
                  <button type="submit">Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
