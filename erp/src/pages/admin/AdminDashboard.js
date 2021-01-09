import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";

const AdminDashboard = () => {
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
                  { title: "Add User", link: "#" },
                  { title: "", link: "#" },
                ],
              },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
