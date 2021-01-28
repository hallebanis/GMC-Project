import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MainNavBar from "../../components/admin/MainNavBar";
import { AvanceForm } from "../../components/GRH/AvanceForm";
import { NavSide } from "../../components/GRH/NavSide";

export const AvancePage = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar></MainNavBar>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <NavSide />
        </Col>
        <Col>
          {" "}
          <AvanceForm history={history} />
        </Col>
      </Row>{" "}
    </Container>
  );
};
