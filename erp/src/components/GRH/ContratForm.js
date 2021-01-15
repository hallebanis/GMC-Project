import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContrat } from "../../actions/GRH/personnelActions";
import { Select } from "./DatePicker";

export const ContratForm = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    dateDebut: "",
    dateFin: "",
    salaireDeBase: "",
    typeContrat: "",
    idPersonnel: "600092b033fc101f446d97ad",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleDateChange = (d) => {
    setInfo({ ...info, dateDebut: d });
  };
  const handleDate = (a) => {
    setInfo({ ...info, dateFin: a });
  };
  const handleSave = () => {
    dispatch(addContrat(info));
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            date Debut :{" "}
            <Select name="dateDebut" onDateChange={handleDateChange} />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            date Fin : <Select name="dateFin" onDateChange={handleDate} />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>salaire de base</Form.Label>
          <Form.Control
            onChange={(e) =>
              setInfo({ ...info, [e.target.name]: +e.target.value })
            }
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

        <Button variant="primary" onClick={handleSave}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
