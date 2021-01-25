import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBInput,
} from "mdbreact";
import MainNavBar from "../../components/admin/MainNavBar";
import GaSideNav from "../../components/GA/GaSideNav";
import { useDispatch } from "react-redux";
import { addFournisseur, getFournisseur } from "../../actions/GA/achatActions";

const AjoutFournisseur = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFournisseur());
  }, [dispatch]);
  const [enableSave, setEnableSave] = useState(true);

  const [info, setInfo] = useState({
    matricule: "",
    numTel: "",
    email: "",
    adresse: "",
    compteBancaire: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    if (
      info.matricule &&
      info.numTel &&
      info.compteBancaire &&
      info.email &&
      info.adresse
    )
      setEnableSave(false);
    else setEnableSave(true);
  };

  const handleSave = () => {
    dispatch(addFournisseur(info));
    history.goBack();
  };
  const handlecancel = () => {
    setInfo({
      nom: "",
      matricule: "",
      numTel: "",
      email: "",
      compteBancaire: "",
      adresse: "",
    });
    history.goBack();
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <GaSideNav />
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <MDBContainer>
            <MDBCard className=" mb-4">
              <MDBCardBody>
                <MDBCardTitle>Nouveau Fournisseur</MDBCardTitle>
                <MDBInput
                  value={info.matricule}
                  name="matricule"
                  label="Matricule Fiscal"
                  onChange={handleChange}
                ></MDBInput>
                <MDBInput
                  value={info.nom}
                  name="nom"
                  label="Raison Social"
                  onChange={handleChange}
                ></MDBInput>
                <MDBInput
                  value={info.numTel}
                  name="numTel"
                  label="Numero Tel"
                  onChange={handleChange}
                ></MDBInput>
                <MDBInput
                  value={info.email}
                  name="email"
                  label="email"
                  onChange={handleChange}
                ></MDBInput>
                <MDBInput
                  value={info.adresse}
                  name="adresse"
                  label="Adresse"
                  onChange={handleChange}
                ></MDBInput>
                <MDBInput
                  value={info.compteBancaire}
                  name="compteBancaire"
                  label="Compte Bancaire"
                  onChange={handleChange}
                ></MDBInput>
                <Button
                  variant="primary"
                  disabled={enableSave}
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button variant="danger" onClick={handlecancel}>
                  cancel
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default AjoutFournisseur;
