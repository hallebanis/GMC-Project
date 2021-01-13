import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ServiceForm = () => {
  const [info, setInfo] = useState();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="nom"
            type="text"
            placeholder=""
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Responsable</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="responsable"
            type="text"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
