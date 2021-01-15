import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";

const UserDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <AdminDashboardSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
