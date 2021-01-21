import React, { Component, useState } from "react";
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
import { editService, loadPersonnel } from "../../actions/GRH/personnelActions";
import { updateClient } from "../../actions/GV/venteActions";

const EditClientModal = ({client}) => {
  const dispatch = useDispatch();
  const [modal8, setModal8] = useState(false);
  const [info, setInfo] = useState(client)
  const toggle = () => {
    setModal8(!modal8);
    setInfo(client)
  }

  const handleChange= (e) =>{
      e.preventDefault()
      setInfo({...info,[e.target.name]:e.target.value})
  }
const handleSave=() =>{
    dispatch(updateClient(info));
    toggle();
}
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={toggle}>
        Edit
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>Modify Service</MDBModalHeader>
        <MDBModalBody>
          <MDBInput value={info.nom}
            name="nom"
            label="Nom" onChange={handleChange}
          ></MDBInput>
          <MDBInput value={info.prenom}
            name="prenom"
            label="Prenom" onChange={handleChange}
          ></MDBInput>
          <MDBInput value={info.adresse}
            name="adresse"
            label="Adresse" onChange={handleChange}
          ></MDBInput>
          <MDBInput value={info.civilite}
            name="civilite"
            label="Civilite" onChange={handleChange}
          ></MDBInput>
          <MDBInput value={info.email}
            name="email"
            label="Email" onChange={handleChange}
          ></MDBInput>
          <MDBInput value={info.tel}
            name="tel"
            label="Teléphone" onChange={handleChange}
          ></MDBInput>

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

export default EditClientModal;
