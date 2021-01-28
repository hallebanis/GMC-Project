import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../actions/authentification/authActions";
import { Button, Form, Icon, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const MessageExampleAttached = ({ history }) => {
  const [info, setinfo] = useState({
    CIN: "",
    matricule: "",
    login: "",
    password: "",
  });

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) history.push(`/user-dashboard/${auth.user._id}`);
  }, [auth.isAuth, history]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setinfo({ ...info, [e.target.name]: e.target.value });
  };

  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerAction(info));
  };
  return (
    <div>
      <Message
        attached
        header="Welcome to our site!"
        content="Fill out the form below to sign-up for a new account"
      />
      <Form className="attached fluid segment">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="CIN"
            onChange={handleChange}
            label="CIN"
            placeholder="CIN"
            type="text"
          />
          <Form.Input
            fluid
            onChange={handleChange}
            name="matricule"
            label="matricule"
            placeholder="Matricule"
            type="text"
          />
        </Form.Group>
        <Form.Input
          label="Username"
          name="login"
          onChange={handleChange}
          placeholder="Username"
          type="text"
        />
        <Form.Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <Button color="blue" onClick={registerNow}>
          Register
        </Button>
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Already signed up?&nbsp;
        <Link to="/login" style={{ color: "blue" }}>
          Login here
        </Link>
        &nbsp;instead.
      </Message>
    </div>
  );
};
