import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListAbscence from "./ListAbscence";
import ListDemande from "./ListDemande";
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
        <Col>
          <Row>
            <ListAbscence absence={auth.user.personnelId.absence} />
          </Row>
          <Row>
            <ListDemande demande={auth.user.personnelId.demande} />
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default PersonnelInfo;
