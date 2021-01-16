import React, { useState } from "react";
import { Form, Button, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editPersonnel } from "../../actions/GRH/personnelActions";
import { Select } from "../../components/GRH/DatePicker";

export const PersonnelDetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const personnel = useSelector((state) => state.personnel);
  let details = personnel.personnel.filter((el) => el._id == match.params.id);
  const [info, setInfo] = useState({
    id: details[0]._id,
    nom: details[0].nom,
    prenom: details[0].prenom,
    CIN: details[0].CIN,
    email: details[0].email,
    adresse: details[0].adresse,
    lieuDeNaissance: details[0].lieuDeNaissance,
    matCnss: details[0].matCnss,
    nombreEnfants: +details[0].nombreEnfants,
    situationFamiliale: details[0].situationFamiliale,
    categorie: details[0].categorie,
    matricule: details[0].matricule,
    dateDeNaissance: new Date(details[0].dateDeNaissance),
  });
  const [selectedItem, setSelectedItem] = useState("choisir une categorie");

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSelectItem = (e) => {
    setSelectedItem(e.target.text);
    setInfo({ ...info, categorie: e.target.text });
  };
  const handleDateChange = (d) => {
    setInfo({ ...info, dateDeNaissance: d });
  };
  const handleEdit = () => {
    dispatch(editPersonnel(info));
  };

  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="nom"
              value={info.nom}
              type="text"
              placeholder="Enter le Nom"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrenom">
            <Form.Label>Prenom</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={info.prenom}
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
              value={info.CIN}
              name="CIN"
              type="text"
              placeholder="Entrer votre CIN"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={info.email}
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
              value={info.adresse}
              name="adresse"
              type="text"
              placeholder="Enter votre addresse"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Lieu de naissance</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={info.lieuDeNaissance}
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
              value={info.matCnss}
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
              value={info.nombreEnfants}
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
              value={info.situationFamiliale}
              name="situationFamiliale"
              type="texte"
              placeholder="Enter votre situation familiale"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Categorie</Form.Label>
            <DropdownButton title={info.categorie} id="dropdown-basic-button">
              <Dropdown.Item onClick={handleSelectItem}>A</Dropdown.Item>
              <Dropdown.Item onClick={handleSelectItem}>B</Dropdown.Item>
              <Dropdown.Item onClick={handleSelectItem}>C</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Date de naissance :
              <Select
                name="dateDeNaissance"
                value={new Date(info.dateDeNaissance)}
                onDateChange={handleDateChange}
              />
            </Form.Label>
          </Form.Group>
        </Form.Row>
        <Button variant="primary" onClick={handleEdit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
