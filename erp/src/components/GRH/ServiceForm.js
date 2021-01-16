import { MDBInput } from "mdbreact";
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
    <div >
      <Form>
        <MDBInput
          onChange={handleChange}
          name="nom"
          type="textarea"
          label="Name"
          rows="2"
          icon="pencil-alt"
        />

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
