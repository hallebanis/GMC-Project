import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Select } from "./DatePicker";
import { addPersonnel } from "../../actions/GRH/personnelActions";
import { Link } from "react-router-dom";

export const AddPersonnelForm = () => {
  const [disableSave, setDisableSave] = useState(true);
  const [selectedItem, setSelectedItem] = useState("choisit une categorie");
  const [info, setInfo] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    CIN: "",
    dateDeNaissance: "",
    lieuDeNaissance: "",
    matCnss: "",
    situationFamiliale: "",
    nombreEnfants: 0,
    categorie: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSelectItem = (e) => {
    setSelectedItem(e.target.text);
    setInfo({ ...info, categorie: e.target.text });
  };
  const handleSave = () => {
    dispatch(addPersonnel(info));
  };
  const handleDateChange = (d) => {
    setInfo({ ...info, dateDeNaissance: d });
  };
  return (
    <div>
      <Form className="form">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="nom"
              type="text"
              placeholder="Enter le Nom"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrenom">
            <Form.Label>Prenom</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="prenom"
              type="text"
              placeholder="Entrer le Prenom"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCIN">
            <Form.Label>CIN</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="CIN"
              type="text"
              placeholder="Entrer votre CIN"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="entrer email"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="adresse"
              type="text"
              placeholder="Enter votre addresse"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Lieu de naissance</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="lieuDeNaissance"
              type="text"
              placeholder="Entrer lieu de naissance"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Matricule Cnss </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="matCnss"
              type="text"
              placeholder="Enter matricule cnss"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nombre d'enfants</Form.Label>
            <Form.Control
              onChange={(e) =>
                setInfo({ ...info, [e.target.name]: +e.target.value })
              }
              name="nombreEnfants"
              type="text"
              placeholder="entrer le nombre d'enfants"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Situation familiale</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="situationFamiliale"
              type="texte"
              placeholder="Enter votre situation familiale"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Categorie</Form.Label>
            <DropdownButton id="dropdown-basic-button" title={selectedItem}>
              <Dropdown.Item onClick={handleSelectItem}>A</Dropdown.Item>
              <Dropdown.Item onClick={handleSelectItem}>B</Dropdown.Item>
              <Dropdown.Item onClick={handleSelectItem}>C</Dropdown.Item>
            </DropdownButton>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Date de naissance :
              <Select name="dateDeNaissance" onDateChange={handleDateChange} />
            </Form.Label>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </div>
  );
};
