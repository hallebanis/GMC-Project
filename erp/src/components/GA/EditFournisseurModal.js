import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import { useDispatch } from "react-redux";
import { updateFournisseur } from "../../actions/GA/achatActions";
import { Form } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";

const EditFournisseurModal = ({ fournisseur }) => {
  const dispatch = useDispatch();
  const [modal8, setModal8] = useState(false);
  const [info, setInfo] = useState({
    _id: fournisseur._id,
    nom: fournisseur.nom,
    matricule: fournisseur.matricule,
    numTel: fournisseur.numTel,
    email: fournisseur.email,
    compteBancaire: fournisseur.compteBancaire,
    adresse: fournisseur.adresse,
  });
  const toggle = () => {
    setModal8(!modal8);
    setInfo({
      _id: fournisseur._id,
      nom: fournisseur.nom,
      matricule: fournisseur.matricule,
      numTel: fournisseur.numTel,
      email: fournisseur.email,
      compteBancaire: fournisseur.compteBancaire,
      adresse: fournisseur.adresse,
    });
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateFournisseur(info));
    toggle();
  };
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={toggle}>
        <GrEdit />
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>Edit Fournisseur</MDBModalHeader>
        <MDBModalBody>
          <Form>
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
          </Form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary" onClick={handleSave}>
            Save changes
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default EditFournisseurModal;
