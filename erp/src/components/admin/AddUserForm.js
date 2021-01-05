import React, { useState } from "react";
import { Button, Form, Badge } from "react-bootstrap";
import DropDownGen from "./DropDownGen";

const AddUserForm = () => {
  const [info, setInfo] = useState({
    login: "",
    password: "",
    personnelId: "",
    role: "",
  });

  const [personnel, setPersonnel] = useState();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handlePersonnelChange = (id) => {
    setInfo({ ...info, personnelId: id });
    setPersonnel();
  };
  return (
    <Form>
      <Form.Label>Choisit un Personnel</Form.Label>
      <DropDownGen
        itemList={[
          { _id: 1, nom: "anis", prenom: "halleb" },
          { _id: 2, nom: "mehdi", prenom: "halleb" },
        ]}
        onPersonnelSelect={handlePersonnelChange}
      />
      <Badge pill variant="primary">
        {(personnel && `${personnel.nom} ${personnel.prenom}`) ||
          "aucun personnel selectionné"}
      </Badge>
      <Form.Group controlId="formBasicLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          enable="false"
          type="text"
          name="login"
          placeholder="Enter login"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          enable="false"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddUserForm;
