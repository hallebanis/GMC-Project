import { MDBContainer } from "mdbreact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import DemandeForm from "../../components/admin/DemandeForm";
import MainNavBar from "../../components/admin/MainNavBar";

const Demande = ({ history, match }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col sm={2} md={2} lg={2}>
          <AdminDashboardSidebar />
        </Col>
        <Col style={{ alignItems: "center" }}>
          <DemandeForm history={history} match={match} />
        </Col>
      </Row>
    </Container>
  );
};

export default Demande;
