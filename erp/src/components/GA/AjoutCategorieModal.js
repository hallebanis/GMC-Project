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
import { addCategorie } from "../../actions/GA/achatActions";

const AjoutCategorieModal = () => {
  const dispatch = useDispatch();
  const [modal8, setModal8] = useState(false);
  const [info, setInfo] = useState({
    reference: "",
    designation: "",
  });
  const toggle = () => {
    setInfo({
      reference: "",
      designation: "",
    });
    setModal8(!modal8);
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    dispatch(addCategorie(info));
    toggle();
  };
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={toggle}>
        New Category
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>New Product</MDBModalHeader>
        <MDBModalBody>
          <MDBInput
            value={info.reference}
            name="reference"
            label="Reference"
            onChange={handleChange}
          ></MDBInput>
          <MDBInput
            value={info.designation}
            name="designation"
            label="Designation"
            onChange={handleChange}
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

export default AjoutCategorieModal;
