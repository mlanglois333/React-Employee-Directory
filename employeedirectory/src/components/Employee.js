import React from "react";

function Employee (props) {
  return (
    <div className="text-center">
      <h3>Phone: {props.phone}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Password: {props.password}</h3>
    </div>
  );
}

export default Employee;