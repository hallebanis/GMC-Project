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
import { useDispatch, useSelector } from "react-redux";
import { addProduit, getProduit } from "../../actions/GA/achatActions";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";

const AjoutModale = () => {
  const dispatch = useDispatch();

  const achat = useSelector((state) => state.achat);
  const [modal8, setModal8] = useState(false);
  const [checked, setChecked] = useState(true);
  const [info, setInfo] = useState({
    reference: "",
    designation: "",
    etat: "en stock",
    prixAchatHT: 0,
    prixVenteHT: 0,
    qteStock: 0,
    idCategorie: "",
    tva: 0,
    idFournisseur: "",
  });
  const handleCheckClick = (e) => {
    setChecked(true);
    setInfo({ ...info, etat: e.target.id });
  };
  const handleCheckedClick2 = (e) => {
    setChecked(false);
    setInfo({ ...info, etat: e.target.id });
  };
  const toggle = () => {
    setInfo({
      reference: "",
      designation: "",
      etat: "en stock",
      prixAchatHT: 0,
      prixVenteHT: 0,
      qteStock: 0,
      idCategorie: "",
      tva: 0,
      idFournisseur: "",
    });
    setModal8(!modal8);
  };
  const [selectedItem, setSelectedItem] = useState("Choose category");
  const handleStringChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleNumericChange = (e) => {
    setInfo({ ...info, [e.target.name]: +e.target.value });
  };
  const handleSelectCategory = (e) => {
    setInfo({ ...info, idCategorie: e.target.id });
    setSelectedItem(e.target.text);
  };
  const handleSave = () => {
    dispatch(addProduit(info));
    toggle();
    dispatch(getProduit());
  };
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={toggle}>
        New Product
      </MDBBtn>
      <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>New Product</MDBModalHeader>
        <MDBModalBody>
          <MDBInput
            value={info.reference}
            name="reference"
            label="Reference"
            onChange={handleStringChange}
          ></MDBInput>
          <MDBInput
            value={info.designation}
            name="designation"
            label="Designation"
            onChange={handleStringChange}
          ></MDBInput>
          <Form.Group>
            <div key={`default-radio`} className="mb-3">
              <Form.Check
                type="radio"
                id={`en stock`}
                label={`en stock`}
                onClick={handleCheckClick}
                checked={checked}
              />

              <Form.Check
                checked={!checked}
                type="radio"
                label={`hors stock`}
                id={`hors stock`}
                onClick={handleCheckedClick2}
              />
            </div>
          </Form.Group>
          <MDBInput
            value={info.prixAchatHT}
            name="prixAchatHT"
            label="PrixAchatHT"
            onChange={handleNumericChange}
          ></MDBInput>
          <div>
            {" "}
            <select search={true} className="browser-default custom-select">
              <option>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <MDBInput
            value={info.prixVenteHT}
            name="prixVenteHT"
            label="PrixVenteHT"
            onChange={handleNumericChange}
          ></MDBInput>
          <MDBInput
            value={info.qteStock}
            name="qteStock"
            label="QteStock"
            onChange={handleNumericChange}
          ></MDBInput>
          <Form.Group>
            <DropdownButton id="dropdown-basic-button" title={selectedItem}>
              {achat.categorie.map((el) => (
                <Dropdown.Item
                  id={el._id}
                  name="idCategorie"
                  onClick={handleSelectCategory}
                >
                  {el.designation}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Form.Group>
          <MDBInput
            value={info.tva}
            name="tva"
            label="TVA"
            onChange={handleNumericChange}
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

export default AjoutModale;
