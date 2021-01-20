import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddClientForm from "../../components/GV/AddClientForm";
import GvSidebar from "../../components/GV/GvSidebar";

const AddClient = ({ history }) => {
  return (
    <Container fluid>
    <Row>
      <Col md={3}>
      <GvSidebar />
      </Col>
      <Col md={6}><AddClientForm history={history} /></Col>
    </Row>
  </Container>

      
  );
};

export default AddClient;
