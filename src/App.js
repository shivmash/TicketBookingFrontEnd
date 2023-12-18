import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddBus from "./pages/AddBus";
import Ticket from "./pages/Ticket";
import ViewBus from "./pages/ViewBus";
import { useEffect, useState } from "react";
import axios from "axios";
import TicketBooking from "./pages/TicketBooking";

function App() {
  const [buses, setbuses] = useState([]);
  useEffect(() => {
    let url = "http://localhost:5000/addbuses";
    axios
      .get(url)
      .then((res) => {
        setbuses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/addbus" element={<AddBus />} />
        <Route path="/view" element={<ViewBus bus={buses} />} />
        <Route path="ticketBooking/:id" element={<TicketBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
