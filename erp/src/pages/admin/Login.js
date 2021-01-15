import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/authentification/authActions";

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
          history.push("/ga-dashboard");
          break;
        case "resAchat":
          history.push("/gv-dashboard");
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

export default Login;
