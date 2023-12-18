import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function TicketBooking() {
  const [name, setname] = useState();
  const [userId, setuserId] = useState();
  const [contactnumber, setcontactnumber] = useState();
  const [emailid, setemailid] = useState();
  const [from, setfrom] = useState();
  const [to, setto] = useState();
  const handleSubmit = (event) => {
    let url = "http://localhost:5000/tickets/create-ticket/";
    let ticketObg = { userId, name, contactnumber, emailid, from, to };
    axios
      .post(url, ticketObg)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data);
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
    <Layout>
      <h1>Ticket booking page</h1>
      <form onSubmit={handleSubmit}>
        <label for="userId">Enter your user Id </label>
        <input
          type="text"
          id="userId"
          placeholder="Enter Your user ID "
          required
          onChange={(e) => {
            setuserId(e.target.value);
          }}
        ></input>
        <label for="name">Enter Your Name </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          required
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <label for="contactnumber">Enter Your Contact Number </label>
        <input
          type="number"
          id="contcontactnumberact"
          placeholder="Enter Your Contact Number"
          required
          onChange={(e) => {
            setcontactnumber(e.target.value);
          }}
        />
        <label for="emailid"> Enter Your EmailId</label>
        <input
          type="text"
          id="emailid"
          placeholder="Enter Your Email Id "
          required
          onChange={(e) => {
            setemailid(e.target.value);
          }}
        ></input>
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
        <label for="destination">Destination :- </label>
        <input
          type="text"
          id="destination"
          placeholder="Destination:-"
          required
          onChange={(e) => {
            setto(e.target.value);
          }}
        ></input>
        <input type="submit" id="submit" />
      </form>
    </Layout>
  );
}

export default TicketBooking;
