import React from "react";
import { AddPersonnelForm } from "../../components/GRH/AddPersonnelForm";
import { DiplomeForm } from "../../components/GRH/DiplomeForm";
import { ContratForm } from "../../components/GRH/ContratForm";
import { ServiceForm } from "../../components/GRH/ServiceForm";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import { NavSide } from "../../components/GRH/NavSide";
import image from "../../res/img/system.png"
import MainNavBar from "../../components/admin/MainNavBar";

export const GrhDashboard = () => {
  return (
    <Container fluid>
      <Row><Col><MainNavBar></MainNavBar></Col></Row>
      <Row height="80vh">
        <Col md={2}>
          <NavSide/>
        </Col>
        <Col><img src={image}/></Col>
      </Row>
    </Container>
  );
};
export default GrhDashboard;
