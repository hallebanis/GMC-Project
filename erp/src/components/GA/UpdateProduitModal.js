import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBCardText,
} from "mdbreact";
import { useDispatch } from "react-redux";
import { verifyNumber } from "../../helpers/verifyNumber";
import { getProduit, updateProduit } from "../../actions/GA/achatActions";

const UpdateProduitModal = ({ produit }) => {
  const dispatch = useDispatch();
  const [modal8, setModal8] = useState(false);
  const [info, setInfo] = useState(produit);
  const toggle = () => {
    setModal8(!modal8);
    setInfo(produit);
  };
  const handleChange = (e) => {
    e.target.value = verifyNumber(e.target.value);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    dispatch(updateProduit(info));
    toggle();
    dispatch(getProduit());
  };
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={toggle}>
        UPDATE
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>UPDATE PRODUCT</MDBModalHeader>
        <MDBCardText>Produit : {info.designation}</MDBCardText>
        <MDBModalBody>
          <MDBInput
            label="Prix Achat"
            name="prixAchatHT"
            value={info.prixAchatHT}
            onChange={handleChange}
          />
          <MDBInput
            label="Prix de Vente"
            name="prixVenteHT"
            value={info.prixVenteHT}
            onChange={handleChange}
          />
          <MDBInput
            label="Quantité"
            name="qteStock"
            value={info.qteStock}
            onChange={handleChange}
          />
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

export default UpdateProduitModal;
