import React from "react";
import offers from "./pictures/offersImage.jpg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function Section3() {
  return (
    <div
      style={{
        backgroundColor: "rgba(145, 199, 224 ,0.2)",
        width: "1500px",
        height: "500px",
      }}
    >
      <h1 style={{ color: "rgb(2,104,135)" }}>Offers</h1>
      <Container style={{ zIndex: "-1" }}>
        <Row>
          <Col>
            <img
              src={offers}
              alt="offerImage"
              style={{
                width: "400px",
                height: "350px",
                // backgroundPosition: "left center",
                left: "80px",
                marginRight: "10px",
              }}
            />
          </Col>
          <Col>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ fontSize: "30px" }}>
                <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>{" "}
                1st Booking Offers
              </li>
              <br />
              <li style={{ fontSize: "30px" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                ></FontAwesomeIcon>{" "}
                Exicting Holiday Deals
              </li>
              <br />
              <li style={{ fontSize: "30px" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                ></FontAwesomeIcon>{" "}
                Free flight cancelation coverage
              </li>
              <br />
              <li style={{ fontSize: "30px" }}>
                <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>{" "}
                Enjoy Free Cabs on Flight Bookings
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section3;
