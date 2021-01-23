import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import { ListService } from "../../components/GRH/ListService";
import { NavSide } from "../../components/GRH/NavSide";

export const ListServicePage = () => {
  return (
    <Container fluid>
      <Row><Col><MainNavBar></MainNavBar></Col></Row>
      <Row>
        <Col md={3}>
          <NavSide />
        </Col>
        <Col >
          <ListService />
        </Col>
      </Row>
    </Container>
  );
};
