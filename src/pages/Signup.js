import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function Signup() {
  const [username, setusername] = useState();
  const [userId, setuserId] = useState();
  const [password, setpassword] = useState();
  const [contact, setcontact] = useState();

  const userObg = {
    //object creation
    username,
    userId,
    password,
    contact,
  };
  let handleSubmit = (event) => {
    //event handling function
    let url = "https://ticketbookinsbackend.onrender.com/users/create-user";
    axios
      .post(url, userObg)
      .then((res) => {
        if (res.status === 200) {
          alert("Registration succesfull");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      }); //send the data by post menthod
    event.preventDefault(); //to prevent auto refresh
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1
              style={{
                textAlign: "center",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              Sign Up
            </h1>

            <form onSubmit={handleSubmit}>
              <label for="userId">UserId</label>
              <input
                type="text"
                id="userId"
                placeholder="Create Your user ID"
                required
                onChange={(e) => {
                  setuserId(e.target.value);
                }}
              />
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Create Your Username"
                required
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <label for="contact">Contact</label>
              <input
                type="number"
                id="number"
                placeholder="Enter your contact"
                required
                onChange={(e) => {
                  setcontact(e.target.value);
                }}
              ></input>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create Your Password"
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
              <input type="submit" id="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
