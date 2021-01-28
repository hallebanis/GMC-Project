import React, { useState } from "react";
import { Container, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { MDBBtn, MDBInput } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { addDemande } from "../../actions/admin/usersActions";
import { loadPersonnelById } from "../../actions/authentification/authActions";

const DemandeForm = ({ match, history }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    sujet: "autre",
    description: "",
    personnelId: auth.user.personnelId._id,
  });

  const handleSujetChange = (e) => {
    setInfo({ ...info, sujet: e.target.text });
  };

  const handleSave = () => {
    dispatch(addDemande(info));
    dispatch(loadPersonnelById(info.personnelId));
    history.goBack();
  };

  const handleCancel = () => {
    setInfo({
      sujet: "autre",
      description: "",
      personnelId: auth.user.personnelId._id,
    });
    history.goBack();
  };

  return (
    <Container>
      <h2>Nouvelle Demande :</h2>

      <Form>
        <Form.Group>
          <Form.Label>Choisit un sujet</Form.Label>
          <DropdownButton name="sujet" title={info.sujet} variant="info">
            <Dropdown.Item onClick={handleSujetChange}>autre</Dropdown.Item>
            <Dropdown.Item onClick={handleSujetChange}>congé</Dropdown.Item>
            <Dropdown.Item onClick={handleSujetChange}>avance</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Form.Group>
          <Form.Label>Veuillez détailler votre Demande</Form.Label>
          <MDBInput
            name="description"
            type="textarea"
            label="Example label"
            onChange={(e) => {
              setInfo({ ...info, [e.target.name]: e.target.value });
            }}
            background
          />
        </Form.Group>
        <Form.Group>
          <MDBBtn outline color="primary" onClick={handleSave}>
            Valider
          </MDBBtn>
          <MDBBtn outline color="warning" onclick={handleCancel}>
            Annuler
          </MDBBtn>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default DemandeForm;
