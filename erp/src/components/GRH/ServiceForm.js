import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addService, loadService } from "../../actions/GRH/personnelActions";
import PersonnelDropDown from "./PersonnelDropDown";

export const ServiceForm = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    nom: "",
    responsable: "",
  });
  useEffect(() => {
    dispatch(loadService());
  }, []);
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleResponsableChange = (id) => {
    setInfo({ ...info, responsable: id });
  };
  const handleSave = () => {
    dispatch(addService(info));
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
          <PersonnelDropDown
            onPersonnelChange={handleResponsableChange}
          ></PersonnelDropDown>
        </Form.Group>

        <Button variant="primary" /* type="submit" */ onClick={handleSave}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
