import React, { useEffect, useLayoutEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadPersonnelById } from "../../actions/authentification/authActions";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";

const UserDashboard = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnelById(auth.user.personnelId._id));
  }, []);

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
                    title: "Nouvelle Demande",
                    link: `/user-dashboard/${auth.user._id}/demande/new`,
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
