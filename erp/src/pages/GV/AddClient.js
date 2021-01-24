import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import AddClientForm from "../../components/GV/AddClientForm";
import GvSidebar from "../../components/GV/GvSidebar";

const AddClient = ({ history }) => {
  return (
    <Container fluid>
      <Row><Col><MainNavBar/></Col></Row>
    <Row>
      <Col md={3} style={{height:"90vh"}}>
      <GvSidebar />
      </Col>
      <Col md={6}><AddClientForm history={history} /></Col>
    </Row>
  </Container>

      
  );
};

export default AddClient;
