import React from "react";
import "./Childcard.css";

const Childcsrds = ({ name, Age, city, phn }) => {
  return (
    <>
      <div className="childcard">
        <h5>Name: {name}</h5>
        <h5>Age: {Age}</h5>
        <h5>City: {city}</h5>
        <h5>Phn: {phn}</h5>
      </div>
    </>
  );
};

export default Childcsrds;
