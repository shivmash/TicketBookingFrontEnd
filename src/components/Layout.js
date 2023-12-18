import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section3 from "./Section3";
import Img from "./Img";
function Layout(props) {
  return (
    <div className="layout-container">
      <Header />
      <main style={{ height: "200vh" }}>
        {props.children}
        <Img/>
        <Section3 />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
