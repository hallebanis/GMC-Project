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
import PersonnelDropDown from "./PersonnelDropDown";
import { useDispatch } from "react-redux";
import { editService, loadPersonnel } from "../../actions/GRH/personnelActions";

const ServiceModal = ({ service }) => {
  const dispatch = useDispatch();
  const [modal8, setModal8] = useState(false);
  const [info, setInfo] = useState({
    id: service._id,
    nom: service.nom,
    responsable: service.responsable._id,
  });
  const toggle = () => {
    setModal8(!modal8);
    setInfo({
      id: service._id,
      nom: service.nom,
      responsable: service.responsable._id,
    });
  };

  const handleSave = () => {
    dispatch(editService(info));
    dispatch(loadPersonnel());
    toggle();
  };
  const handlePersonnelChange = (val) => {
    setInfo({ ...info, responsable: val });
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer>
      {console.log(info)}
      <MDBBtn color="info" onClick={toggle}>
        Edit
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>Modify Service</MDBModalHeader>
        <MDBModalBody>
          <MDBInput
            value={info.nom}
            name="nom"
            label="Nom"
            onChange={handleChange}
          ></MDBInput>
          <PersonnelDropDown onPersonnelChange={handlePersonnelChange} />
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

export default ServiceModal;
