import React from "react";
import { Link } from "react-router-dom";
import GvSidebar from "../../components/GV/GvSidebar";
import { Col, Container, Row } from 'react-bootstrap'

const GvDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
        <GvSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default GvDashboard;
