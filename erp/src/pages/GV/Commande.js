import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getClient, getCommandeVente } from "../../actions/GV/venteActions";
import MainNavBar from "../../components/admin/MainNavBar";
import GvSidebar from "../../components/GV/GvSidebar";
import ListeCommandes from "../../components/GV/ListeCommandes"

const Commande = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient());
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
        <Col> <ListeCommandes ListeCommandes={vente.commandeVente} /> </Col>
      </Row>
    </Container>
  );
};

export default Commande;
