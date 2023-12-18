import React from "react";
import Layout from "../components/Layout";
import ViewBusRow from "./ViewBusRow";
import "../components/Viewstyle.css";
function ViewBus(prop) {
  const tData = () => {
    const { bus } = prop;
    return bus.map((b, i) => {
      return <ViewBusRow obj={b} id={i}></ViewBusRow>;
    });
  };
  return (
    <Layout>
      <h1>View Buses</h1>
      <table className="tab">
        <thead className="thead">
          <th className="tabhead">Name of tourism</th>
          <th className="tabhead">Bus Number</th>
          <th className="tabhead">From</th>
          <th className="tabhead">To</th>
          <th className="tabhead">Action</th>
        </thead>
        <tbody className="tabbody">{tData()}</tbody>
      </table>
    </Layout>
  );
}

export default ViewBus;
