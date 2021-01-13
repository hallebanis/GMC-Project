import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Select } from "./DatePicker";

export const ContratForm = () => {
  const [info, setInfo] = useState();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            date Debut : <Select name="dateDebut" />
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            name="dateDebut"
            type="text"
            placeholder=""
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            date Fin : <Select name="dateFin" />
          </Form.Label>
          <Form.Control onChange={handleChange} type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>salaire de base</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="salaireDeBase"
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>type contrat</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="typeContrat"
            type="text"
            placeholder=""
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
