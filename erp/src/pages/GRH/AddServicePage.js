import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MainNavBar from "../../components/admin/MainNavBar";
import { NavSide } from "../../components/GRH/NavSide";
import { ServiceForm } from "../../components/GRH/ServiceForm";

export const AddServicePage = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar color="#343A40" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <NavSide />
        </Col>
        <Col>
          <ServiceForm />
        </Col>
      </Row>
    </Container>
  );
};
