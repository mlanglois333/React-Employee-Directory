import React from "react";

function Employee (props) {
  return (
    <div className="text-center">
      <h3>Location: {props.location}</h3>
      <h3>Gender: {props.gender}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default Employee;