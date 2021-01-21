import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  getCommandeVente } from "../../actions/GV/venteActions";
import MainNavBar from "../../components/admin/MainNavBar";
import AddCommandeModal from "../../components/GV/AddCommandeModal";
import GvSidebar from "../../components/GV/GvSidebar";
import ListeCommandes from "../../components/GV/ListeCommandes"

const Commande = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getClient());
    dispatch(getCommandeVente())
  }, []);
  const vente = useSelector(state => state.vente)
  return (
    <Container fluid>
      <Row > <Col><MainNavBar /> </Col></Row>
      <Row>
        <Col md={3}>
          <GvSidebar />
        </Col>
        <Col> <ListeCommandes commandList={vente.commandeVente} /> <AddCommandeModal /></Col>
      </Row>
    </Container>
  );
};

export default Commande;
