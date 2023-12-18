import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../components/pictures/lets1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const mystyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/footer1.jpg"})`,
    backgroundSize: "cover",
    width: "1500px",
    height: "500px",
  };
  return (
    <div style={mystyle} class="container-fluid">
      <div class="row">
        <div class="col-sm-12 mt-5 ">
          <img
            style={{ width: "70px", height: "70px" }}
            src={logo}
            alt="logo"
          />
          <span style={{ fontSize: "20px" }} class="col-sm-6 mt-3 text-primary">
            {" "}
            <b>Let's Go Travel</b>
          </span>
        </div>

        <br />
        <div style={{ fontSize: "35px" }} class=" mt-3 text-primary">
          {" "}
          Let's Go Travel around the world{" "}
        </div>

        <div>
          <div style={{ fontSize: "35px" }} class=" mt-3 text-primary">
            <span style={{ fontSize: "20px", paddingLeft: " 20px" }}>
              <button
                style={{
                  borderRadius: "5px",
                  boxShadow: "5px 5px 5px ",
                  paddingLeft: "10px",
                  paddingRight: "30px",
                }}
              >
                Contact{" "}
                <FontAwesomeIcon
                  style={{ paddingLeft: "3px" }}
                  icon={faEnvelope}
                  size="lg"
                />
              </button>
            </span>
          </div>

          <div class="row">
            <div class=" ps-5 mt-3 text-primary" style={{ fontSize: "20px" }}>
              Follow Us
            </div>
          </div>

          <div class="row">
            <div class=" ps-5 mt-3 text-primary" style={{ fontSize: "45px" }}>
              <FontAwesomeIcon icon={faFacebook} />{" "}
              <FontAwesomeIcon icon={faSquareInstagram} />{" "}
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <div class="row">
            <div class=" ps-5 mt-3 text-dark" style={{ fontSize: "15px" }}>
              © 2023 Letsgotravel (India) Private Limited. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
