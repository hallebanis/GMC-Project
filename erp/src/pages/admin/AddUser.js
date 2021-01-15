import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AddUserForm from "../../components/admin/AddUserForm";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";
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
        <Col md="auto">
          <AdminDashboardSidebar
            color="rgb(52,58,64)"
            linkList={[
              {
                categorie: "Utilisateur",
                elements: [
                  { title: "User List", link: "/admin-dashboard/users" },
                  { title: "Add User", link: "/admin-dashboard/adduser" },
                ],
              },
              {
                categorie: "Roles",
                elements: [
                  {
                    title: "Role List",
                    link: "/admin-dashboard/roles",
                  },
                ],
              },
            ]}
          />
        </Col>
        <Col>
          <AddUserForm history={history} />;
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
