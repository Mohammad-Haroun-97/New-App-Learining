import React from "react";
import Form from "react-bootstrap/Form";

class FormClass extends React.Component {
  render() {
    return (
      <>
        <h3>Horns Number</h3>
        <Form.Group  className="mb-3" controlId="selectedHorn" >
        <Form.Select aria-label="Default select example" onChange={this.props.filter} >
          <option value='All'>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">Random</option>
        </Form.Select>
        </Form.Group>
      </>
    );
  }
}

export default FormClass;


