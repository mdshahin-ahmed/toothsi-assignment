import React from "react";
import { Link } from "react-router-dom";
import "./Proceed.css";

const Procced = () => {
  return (
    <div>
      <h1>Thank You So Much!</h1>
      <Link to={"/home"}>
        <div className="backToHome">Bank to home</div>
      </Link>
    </div>
  );
};

export default Procced;
