import React from "react";
import { Link } from "react-router-dom";
import GvSidebar from "../../components/GV/GvSidebar";
import { Col, Container, Row } from 'react-bootstrap'
import MainNavBar from "../../components/admin/MainNavBar";



const GvDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
        <MainNavBar/> 
        </Col>
      </Row>
      <Row>
        <Col>
        <GvSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default GvDashboard;
