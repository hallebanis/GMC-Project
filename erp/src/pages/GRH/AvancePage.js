import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import { AvanceForm } from "../../components/GRH/AvanceForm";
import { NavSide } from "../../components/GRH/NavSide";

export const AvancePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar color="#343A40"></MainNavBar>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <NavSide />
        </Col>
        <Col>
          {" "}
          <AvanceForm />
        </Col>
      </Row>{" "}
    </Container>
  );
};
