import React from "react";
import { Container } from "react-bootstrap";
import { MessageExampleAttached } from "../../components/GRH/Register";

const Register = ({ history }) => {
  return (
    <Container style={{ marginTop: "8vh" }}>
      <MessageExampleAttached history={history} />
    </Container>
  );
};

export default Register;
