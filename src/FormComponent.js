import React from "react";

function FormComponent(props) {
  console.log(props.isAnything);
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
      <label>
        <input
          onChange={props.handleChange}
          name="lastName"
          value={props.lastName}
        />
      </label>
      <br />
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={props.handleChange}
        />
        &nbsp;Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={props.handleChange}
        />
        &nbsp;Female
      </label>
      <br />
      <br />
      <label>
        Destination
        <br />
        <select
          onChange={props.handleChange}
          name="destination"
          value={props.destination}
        >
          <option value="">-------</option>
          <option value="germany">Germany</option>
          <option value="spain">Spain</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="australia">Australia</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        <input
          type="checkBox"
          name="isVegetarian"
          checked={props.isVegetarian}
          onChange={props.handleChange}
        />
        &nbsp;Vegetarian
        <br />
      </label>
      <label>
        <input
          type="checkBox"
          name="isAnything"
          checked={props.isAnything}
          onChange={props.handleChange}
        />
        &nbsp;Anything
        <br />
      </label>
      <label>
        <input
          type="checkBox"
          name="isVegan"
          checked={props.isVegan}
          onChange={props.handleChange}
        />
        &nbsp;Vegan
        <br />
      </label>
      <br />
      <button>Post Form</button>
      <p>
        Name: {props.firstName} {props.lastName}
      </p>
      <p>Gender: {props.gender}</p>
      <p>Destination: {props.destination}</p>
      {props.isVegan && <p>Vegan: True</p>}
      {props.isAnything && <p>Anything: True</p>}
      {props.isVegetarian && <p>Vegetarian: True</p>}
    </form>
  );
}

export default FormComponent;
