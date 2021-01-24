import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { NavSide } from "../../components/GRH/NavSide";
import image from "../../res/img/system.png";
import MainNavBar from "../../components/admin/MainNavBar";
import { useSelector } from "react-redux";

export const GrhDashboard = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar color="#343A40"></MainNavBar>
        </Col>
      </Row>
      <Row height="80vh">
        <Col md={2}>
          <NavSide />
        </Col>
        <Col>
          <img src={image} alt="none" />
        </Col>
      </Row>
    </Container>
  );
};
export default GrhDashboard;
