import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

import { useDispatch, useSelector } from "react-redux";
import ListeClientDropDown from "./ListeClientDropDown";
import { getClient } from "../../actions/GV/venteActions";
import { Form } from "react-bootstrap";

const AddCommandeModal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient());
  }, []);
  const vente = useSelector((state) => state.vente);
  const setNumFacture = () => {
    if (vente.commandeVente.length > 0)
      return vente.commandeVente[vente.commandeVente.length - 1].numero + 1;
  };

  const [info, setInfo] = useState({
    numero: 1,
    total: 0,
    isValidate: false,
    clientId: "",
  });
  const [modal8, setModal8] = useState(false);

  const toggle = () => {
    setModal8(!modal8);
  };
  const setClientId = (val) => {
    setInfo({ ...info, clientId: val });
  };

  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={toggle}>
        Edit
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>New Command</MDBModalHeader>
        <MDBModalBody>
          <Form>
            <ListeClientDropDown
              listeClient={vente.client}
              setClientId={setClientId}
            />
          </Form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default AddCommandeModal;
