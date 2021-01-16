import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/authentification/authActions";

/* const Login = ({ history }) => {
  const [info, setInfo] = useState({
    login: "",
    password: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(info));
  };

  useEffect(() => {
    if (auth.user) {
      switch (auth.user.role.titre) {
        case "user":
          history.push(`/user-dashboard/${auth.user._id}`);
          break;
        case "admin":
          history.push(`/admin-dashboard`);
          break;
        case "resVente":
          history.push("/gv-dashboard");
          break;
        case "resAchat":
          history.push("/ga-dashboard");
          break;
        case "GRH":
          history.push("/grh-dashboard");
          break;
        default:
          break;
      }
    }
  }, [auth.user]);

  return (
    <Form className="container">
      <Form.Group className="container" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control
          name="login"
          type="text"
          placeholder="Enter login"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>
      {auth.errors
        ? auth.errors.map((el) => <h3 className="errorTitle">{el.msg}</h3>)
        : null}
    </Form>
  );
};

export default Login; */
/* import React from "react";
 */ /* import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const Login = ({ history }) => {
  const [info, setInfo] = useState({
    login: "",
    password: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(info));
  };

  useEffect(() => {
    if (auth.user) {
      switch (auth.user.role.titre) {
        case "user":
          history.push(`/user-dashboard/${auth.user._id}`);
          break;
        case "admin":
          history.push(`/admin-dashboard`);
          break;
        case "resVente":
          history.push("/gv-dashboard");
          break;
        case "resAchat":
          history.push("/ga-dashboard");
          break;
        case "GRH":
          history.push("/grh-dashboard");
          break;
        default:
          break;
      }
    }
  }, [auth.user]);
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your name"
                onChange={handleChange}
                name="login"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              
              <MDBInput
                label="Type your password"
                name="password"
                onChange={handleChange}
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={handleLogin}>Login</MDBBtn>
              {auth.errors
                ? auth.errors.map((el) => (
                    <h3 className="errorTitle">{el.msg}</h3>
                  ))
                : null}
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login; */
/* import React from 'react';
 */import { MDBAutocomplete, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';



export const Login =({history})=> {
const [info, setInfo] = useState({
    login: "",
    password: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(info));
  };

  useEffect(() => {
    if (auth.user) {
      switch (auth.user.role.titre) {
        case "user":
          history.push(`/user-dashboard/${auth.user._id}`);
          break;
        case "admin":
          history.push(`/admin-dashboard`);
          break;
        case "resVente":
          history.push("/gv-dashboard");
          break;
        case "resAchat":
          history.push("/ga-dashboard");
          break;
        case "GRH":
          history.push("/grh-dashboard");
          break;
        default:
          break;
      }
    }
  }, [auth.user]);  
  const smallStyle = { fontSize: '0.8rem'}
  return (
  
    
        <MDBRow>
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                </div>
                <MDBInput label="Your login"  onChange={handleChange}
                name="login" group type="email" validate error="wrong" success="right"/>
                <MDBInput label="Your password" name="password"
                onChange={handleChange} group type="password" validate containerClass="mb-0"/>
                
                <div className="text-center pt-3 mb-3">
                  <MDBBtn type="button" onClick={handleLogin} gradient="blue" rounded className="btn-block z-depth-1a">Sign in</MDBBtn>
                  {auth.errors
                ? auth.errors.map((el) => (
                    <h3 className="errorTitle">{el.msg}</h3>
                  ))
                : null}
                </div>
               
              </MDBCardBody>
              
            </MDBCard>
          </MDBCol>
        </MDBRow>
    );
  };

export default Login; 