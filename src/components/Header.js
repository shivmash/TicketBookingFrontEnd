import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../components/pictures/lets1.jpg";
import "../components/styles.css";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div className="container">
      <Container>
        <Navbar
          className="navbar nav navbar-expand-lg navigation"
          data-bs-theme="light"
        >
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                }}
                src={logo}
              />{" "}
              <b style={{ color: "rgb(2,104,135)" }}>Let's Go Travel</b>
            </Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>
                <b className=" navlinks ps-5 pe-4">Home</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <b className="navlinks pe-4">Login</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>
                <b className="navlinks pe-4">SignIn</b>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ticket">
              <Nav.Link>
                <b className="navlinks pe-4">Tickets</b>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/addbus">
              <Nav.Link>
                <b className="navlinks pe-4">AddBuses</b>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/view">
              <Nav.Link>
                <b className="navlinks pe-4">View Buses </b>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
