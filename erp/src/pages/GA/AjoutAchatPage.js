import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import GaSideNav from "../../components/GA/GaSideNav";
import ListeFournisseurDropDown from "../../components/GA/ListeFournisseurDropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommandeAchat,
  getFournisseur,
} from "../../actions/GA/achatActions";
import mongoose from "mongoose";
import StockUpdate from "./StockUpdate";
const AjoutAchatPage = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFournisseur());
    dispatch(getCommandeAchat());
  }, [dispatch]);
  const achat = useSelector((state) => state.achat);
  const [commandeAchat, setCommandeAchat] = useState({
    _id: mongoose.Types.ObjectId().toString(),
    isValidate: false,
    idFournisseur: "",
    numero: 0,
  });
  const setNumFacture = () => {
    if (achat.commandeAchat.length > 0)
      return achat.commandeAchat[achat.commandeAchat.length - 1].numero + 1;
    else return 1;
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
        <Col md={6} className="dataCol">
          <StockUpdate />
        </Col>
      </Row>
    </Container>
  );
};

export default AjoutAchatPage;
