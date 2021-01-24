import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AddUserForm from "../../components/admin/AddUserForm";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";
import SideNav from "../../components/admin/SideNav";
import PersonnelDropDown from "../../components/GRH/PersonnelDropDown";

const AddUser = ({ history }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <SideNav />
        </Col>
        <Col>
          <AddUserForm history={history} />;
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
