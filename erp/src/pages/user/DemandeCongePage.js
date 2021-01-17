import { MDBContainer } from "mdbreact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import DemandeForm from "../../components/admin/DemandeForm";
import MainNavBar from "../../components/admin/MainNavBar";

const Demande = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <AdminDashboardSidebar />
        </Col>
        <Col>
          <DemandeForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Demande;
