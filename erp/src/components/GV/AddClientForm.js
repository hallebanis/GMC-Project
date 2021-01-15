import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const AddClientForm = () => {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <Form.Label>Nom</Form.Label>
      <FormControl onChange={handleChange} name="nom" type="text" />
      <Form.Label>Prenom</Form.Label>
      <FormControl onChange={handleChange} name="prenom" type="text" />
      <Form.Label>Adresse</Form.Label>
      <FormControl onChange={handleChange} name="adresse" type="text" />
      <Form.Label>civilité</Form.Label>
      <FormControl onChange={handleChange} name="civilite" type="text" />
      <Form.Label>Email</Form.Label>
      <FormControl onChange={handleChange} name="email" type="email" />
      <Form.Label>Telephone</Form.Label>
      <FormControl onChange={handleChange} name="tel" type="text" />
      <Button>Valider</Button>
      <Button>Annuler</Button>
    </Form>
  );
};

export default AddClientForm;
