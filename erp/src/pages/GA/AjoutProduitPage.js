import React, { useEffect, useState } from "react";
import { MDBContainer, MDBBtn, MDBInput } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import {
  addProduit,
  getCategorie,
  getFournisseur,
  getProduit,
} from "../../actions/GA/achatActions";
import MainNavBar from "../../components/admin/MainNavBar";
import GaSideNav from "../../components/GA/GaSideNav";
import { verifyNumber } from "../../helpers/verifyNumber";

const AjoutProduitPage = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFournisseur());
    dispatch(getCategorie());
  }, [dispatch]);
  const [categorieFilter, setCategorieFilter] = useState("");
  const achat = useSelector((state) => state.achat);
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
    history.goBack();
  };
  const [selectedItem, setSelectedItem] = useState("Choose category");
  const [fournisseurFilter, setFournisseurFilter] = useState("");
  const [selectFournisseur, setSelectFournisseur] = useState(
    "choisit Fournisseur"
  );
  const handleStringChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleNumericChange = (e) => {
    e.target.value = verifyNumber(e.target.value);
    setInfo({ ...info, [e.target.name]: +e.target.value });
  };

  const handleSelectCategory = (e) => {
    setInfo({ ...info, idCategorie: e.target.id });
    setSelectedItem(e.target.text);
  };
  const handleSelectFournisseur = (e) => {
    setInfo({ ...info, idFournisseur: e.target.id });
    setSelectFournisseur(e.target.text);
  };
  const handleSave = () => {
    dispatch(addProduit(info));
    toggle();
    dispatch(getProduit());
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={3} style={{ height: "90vh" }}>
          <GaSideNav />
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <MDBContainer>
            <Form.Group>
              <DropdownButton id="dropdown-basic-button" title={selectedItem}>
                <MDBInput
                  type="search"
                  label="search"
                  onChange={(e) => setCategorieFilter(e.target.value)}
                  value={categorieFilter}
                ></MDBInput>
                {achat.categorie.map(
                  (el) =>
                    el.designation
                      .toUpperCase()
                      .trim()
                      .includes(categorieFilter.toUpperCase().trim()) && (
                      <Dropdown.Item
                        id={el._id}
                        name="idCategorie"
                        onClick={handleSelectCategory}
                      >
                        {el.designation}
                      </Dropdown.Item>
                    )
                )}
              </DropdownButton>
            </Form.Group>
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
              <DropdownButton
                id="dropdown-basic-button"
                title={selectFournisseur}
              >
                <MDBInput
                  type="search"
                  label="search"
                  onChange={(e) => setFournisseurFilter(e.target.value)}
                  value={fournisseurFilter}
                ></MDBInput>
                {achat.fournisseur.map(
                  (el) =>
                    el.nom
                      .toUpperCase()
                      .trim()
                      .includes(fournisseurFilter.toUpperCase().trim()) && (
                      <Dropdown.Item
                        id={el._id}
                        name="idFournisseur"
                        onClick={handleSelectFournisseur}
                      >
                        {el.nom}
                      </Dropdown.Item>
                    )
                )}
              </DropdownButton>
            </Form.Group>
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
            <MDBInput
              value={info.tva}
              name="tva"
              label="TVA"
              onChange={handleNumericChange}
            ></MDBInput>

            <MDBBtn color="secondary" onClick={toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={handleSave}>
              Save changes
            </MDBBtn>
          </MDBContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default AjoutProduitPage;
