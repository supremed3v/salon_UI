import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <h1 className="heading">
        BLOND{" "}
        <span>
          & <br /> HIGHLIGHT
        </span>
      </h1>
      <div className="container-body">
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          expedita praesentium, delectus sapiente tempore nobis enim cupiditate
        </p>
      </div>

      <div className="container-body">
        <Link className="cta_button-body">Book an appointment</Link>
      </div>
    </div>
  );
};

export default LandingPage;
