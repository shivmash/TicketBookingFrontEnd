import React from "react";
import background from "./pictures/lets3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function Img() {
  return (
    <div>
    
      <img
        style={{
          width: "1500px",
          height: "500px",
          margin: "0px",
          padding: "0px",
          borderRadius: "5px",
        }}
        src={background}
        alt="bg_image"
      />

      {/* <b>It's A Big World Out There,Let's Explore</b> */}
    </div>
  );
}

export default Img;
