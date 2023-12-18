import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function AddBus() {
  const [nameoftourism, setnameoftourism] = useState();
  const [noofseats, setnoofseats] = useState();
  const [busnumber, setbusnumber] = useState();
  const [from, setfrom] = useState();
  const [destination, setdestination] = useState();

  const userObg = {
    //object creation
    nameoftourism,
    noofseats,
    busnumber,
    from,
    destination,
  };
  let handleSubmit = (event) => {
    //event handling function
    let url = "http://localhost:5000/addbuses/add-bus";
    axios
      .post(url, userObg)
      .then((res) => {
        if (res.status === 200) {
          alert("Bus added succesfull");
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
            <h1 style={{ textAlign: "center" }}>Add Bus Details </h1>

            <form onSubmit={handleSubmit}>
              <table>
                <tr>
                  <label for="nameoftourism">Name Of Tourism </label>
                  <input
                    type="text"
                    id="nameoftourism"
                    placeholder="Enter Bus Tourism Name"
                    required
                    onChange={(e) => {
                      setnameoftourism(e.target.value);
                    }}
                  />
                </tr>
                <tr>
                  <label for="noofseats"> Number Of Seats </label>
                  <input
                    type="number"
                    id="noofseats"
                    placeholder="Enter Number of Seats"
                    required
                    onChange={(e) => {
                      setnoofseats(e.target.value);
                    }}
                  ></input>
                </tr>
                <tr>
                  <label for="busnumber">Bus Number </label>
                  <input
                    type="text"
                    id="busnumber"
                    placeholder="Enter Bus Number "
                    required
                    onChange={(e) => {
                      setbusnumber(e.target.value);
                    }}
                  ></input>
                </tr>
                <tr>
                  <label for="from">From :- </label>
                  <input
                    type="text"
                    id="from"
                    placeholder="From:-"
                    required
                    onChange={(e) => {
                      setfrom(e.target.value);
                    }}
                  ></input>
                </tr>

                <tr>
                  <label for="destination">Destination :- </label>
                  <input
                    type="text"
                    id="destination"
                    placeholder="Destination:-"
                    required
                    onChange={(e) => {
                      setdestination(e.target.value);
                    }}
                  ></input>
                </tr>

                <tr>
                  <input type="submit" id="submit" />
                </tr>
              </table>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddBus;
