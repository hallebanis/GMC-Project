import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";
import { NavSide } from "../../components/GRH/NavSide";
import { ServiceForm } from "../../components/GRH/ServiceForm";

export const AddServicePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <NavSide />
        </Col>
        <Col>
          <ServiceForm />
        </Col>
      </Row>
    </Container>
  );
};
