import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import GaSideNav from "../../components/GA/GaSideNav";

const AjoutAchatPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={3} style={{ height: "90vh" }}>
          <GaSideNav />
        </Col>
        <Col md={1}></Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
};

export default AjoutAchatPage;
