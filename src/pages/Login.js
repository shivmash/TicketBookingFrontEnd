import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Login() {
  const [username, setusername] = useState();
  // const [password, setpassword] = useState();

  const handleSubmit = () => {
    const url = "http://localhost:5000/users/login";
    const loginobj = { username };
    axios
      .post(url, loginobj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Your Username"
            required
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />

          {/* <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          /> */}

          <input type="submit" />
        </form>
      </Row>
    </Container>
  );
}

export default Login;
