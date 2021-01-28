import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { addClient, getClient } from "../../actions/GV/venteActions";
import { useDispatch } from "react-redux";

const AddClientForm = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClient());
  }, [dispatch]);

  const [info, setInfo] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    tel: "",
    civilite: "",
    email: "",
  });
  const handleSave = (e) => {
    dispatch(addClient(info));
    setInfo({
      nom: "",
      prenom: "",
      adresse: "",
      tel: "",
      civilite: "",
      email: "",
    });
  };
  const [enable, setEnable] = useState(true);
  const handleCancel = () => {
    setInfo({
      nom: "",
      prenom: "",
      adresse: "",
      tel: "",
      civilite: "",
      email: "",
    });
    history.goBack();
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    setEnable(info.nom === "" || info.prenom === "");
  };
  return (
    <Form>
      <Form.Label>Nom</Form.Label>
      <FormControl
        value={info.nom}
        onChange={handleChange}
        name="nom"
        type="text"
      />

      <Form.Label>Prenom</Form.Label>
      <FormControl
        value={info.prenom}
        onChange={handleChange}
        name="prenom"
        type="text"
      />
      <Form.Label>Adresse</Form.Label>
      <FormControl
        value={info.adresse}
        onChange={handleChange}
        name="adresse"
        type="text"
      />
      <Form.Label>civilité</Form.Label>
      <FormControl
        value={info.civilite}
        onChange={handleChange}
        name="civilite"
        type="text"
      />
      <Form.Label>Email</Form.Label>
      <FormControl
        value={info.email}
        onChange={handleChange}
        name="email"
        type="email"
      />
      <Form.Label>Telephone</Form.Label>
      <FormControl
        value={info.tel}
        onChange={handleChange}
        name="tel"
        type="text"
      />
      <Button disabled={enable} onClick={handleSave}>
        Valider
      </Button>
      <Button onClick={handleCancel}>Annuler</Button>
    </Form>
  );
};

export default AddClientForm;
