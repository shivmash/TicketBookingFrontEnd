import React from "react";
import { Link } from "react-router-dom";
import "../components/Viewstyle.css";
function ViewBusRow({ obj }) {
  return (
    <tr>
      {console.log(obj)}
      <td className="tabhead">{obj.nameoftourism}</td>
      <td className="tabhead">{obj.busnumber}</td>
      <td className="tabhead">{obj.from}</td>
      <td className="tabhead">{obj.destination}</td>
      <td className="tabhead">
        <Link to={`/ticketBooking/${obj._id}`}>
          <button>Book</button>
        </Link>
      </td>
    </tr>
  );
}

export default ViewBusRow;
