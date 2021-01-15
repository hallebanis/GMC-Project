import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Select } from "./DatePicker";

export const DiplomeForm = () => {
  const [info, setInfo] = useState();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>titre</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="titre"
            type="text"
            placeholder=""
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            années de scolarité : <Select name="anneesDeScolarite" />
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>ecole</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="ecole"
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
