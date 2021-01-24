import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MainNavBar from "../../components/admin/MainNavBar";
import { ListService } from "../../components/GRH/ListService";
import { NavSide } from "../../components/GRH/NavSide";

export const ListServicePage = ({ history }) => {
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
      <Row>
        <Col md={3}>
          <NavSide />
        </Col>
        <Col>
          <ListService />
        </Col>
      </Row>
    </Container>
  );
};
