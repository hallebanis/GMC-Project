import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../actions/authentification/authActions";
import {MessageExampleAttached} from "../../components/GRH/Register";

const Register = ({ history }) => {
 
  return (
    <Container>
      <MessageExampleAttached history={history}/>
     
    </Container>
  );
};

export default Register;
