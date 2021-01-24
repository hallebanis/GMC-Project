import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import DemandeForm from "../../components/admin/DemandeForm";
import MainNavBar from "../../components/admin/MainNavBar";
import UserSideNav from "../../components/user/UserSideNav";

const Demande = ({ history, match }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <UserSideNav />
        </Col>
        <Col style={{ alignItems: "flex-end" }}>
          <DemandeForm history={history} match={match} />
        </Col>
      </Row>
    </Container>
  );
};

export default Demande;
