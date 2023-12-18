import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function Booking() {
  const [from, setfrom] = useState();
  const [to, setto] = useState();
  const [date, setdate] = useState();
  const [type, settype] = useState();

  const ticketObg = {
    //object creation
    from,
    to,
    date,
    type,
  };
  let handleSubmit = (event) => {
    //event handling function
    let url = "http://localhost:5000/bookings/bookticket";
    axios
      .post(url, ticketObg)
      .then((res) => {
        if (res.status === 200) {
          alert("succesfull");
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
      <Layout>
        <h1>Booking </h1>
        <form onSubmit={handleSubmit}>
          <label for="from">Choose Your Starting Point </label>
          <input
            type="text"
            id="from"
            placeholder="Choose Your Start Point "
            required
            onChange={(e) => {
              setfrom(e.target.value);
            }}
          ></input>
          <label for="to">Choose Your Destination</label>
          <input
            type="text"
            id="to"
            placeholder="Choose Your Destination "
            required
            onChange={(e) => {
              setto(e.target.value);
            }}
          ></input>
          <label for="date"> Enter Date</label>
          <input
            type="date"
            id="date"
            placeholder="Enter Date "
            required
            onChange={(e) => {
              setdate(e.target.value);
            }}
          ></input>
          <label for="type">From :- </label>
          <input
            type="text"
            id="type"
            placeholder="Type Of Bus"
            required
            onChange={(e) => {
              settype(e.target.value);
            }}
          ></input>
          <input type="submit" id="submit" />
        </form>
      </Layout>
    </div>
  );
}

export default Booking;
