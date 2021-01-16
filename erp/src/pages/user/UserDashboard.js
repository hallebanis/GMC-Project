import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";

const UserDashboard = () => {
  const auth = useSelector((state) => state.auth);
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
            linkList={[
              {
                categorie: "Demandes",
                elements: [
                  {
                    title: "congé",
                    link: `/user-dashboard/${auth.user._id}/demande/conge`,
                  },
                ],
              },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
