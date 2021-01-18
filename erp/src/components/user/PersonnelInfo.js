import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserDetails from "./UserDetails";

const PersonnelInfo = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Container>
      <Row>
        <h2>Personnel Info</h2>
      </Row>
      <Row>
        <Col>
          <UserDetails userDetails={auth.user} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default PersonnelInfo;
