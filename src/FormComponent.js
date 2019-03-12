import React from "react";

function FormComponent(props) {
  console.log(props.firstName);
  return (
    <form>
      <label>
        <input
          onChange={props.handleChange}
          name="firstName"
          value={props.firstName}
        />
      </label>
      <br />
      <button>Post Form</button>
      <p>Name: {props.firstName}</p>
    </form>
  );
}

export default FormComponent;
