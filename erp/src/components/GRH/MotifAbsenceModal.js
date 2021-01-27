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
import { addAbsence, loadPersonnel } from "../../actions/GRH/personnelActions";

const MotifAbsenceModal = ({ modified, setModified, personnel }) => {
  const dispatch = useDispatch();
  const [modal8, setModal8] = useState(false);
  const [info, setInfo] = useState({
    idPersonnel: personnel._id,
    motif: "N/A",
  });
  const toggle = () => {
    setModal8(!modal8);
    setInfo({
      idPersonnel: personnel._id,
      motif: "N/A",
    });
  };

  const handleSave = () => {
    dispatch(addAbsence(info));
    setModified(!modified);
    toggle();
    dispatch(loadPersonnel());
  };
  const handleMotifChange = (e) => {
    setInfo({ ...info, motif: e.target.value });
  };

  return (
    <MDBContainer>
      <MDBBtn color="danger" onClick={toggle}>
        Absent
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader
          toggle={toggle}
        >{`Motif Absence de ${personnel.nom} ${personnel.prenom}`}</MDBModalHeader>
        <MDBModalBody>
          <MDBInput
            value={info.motif}
            name="nom"
            label="Motif d'absence"
            onChange={handleMotifChange}
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

export default MotifAbsenceModal;
