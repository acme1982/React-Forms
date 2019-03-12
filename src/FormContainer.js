import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkBox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <FormComponent {...this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default FormContainer;
