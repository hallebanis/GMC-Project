import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const User = ({ user }) => {
  const [enableChanges, setEnableChanges] = useState(false);
  return (
    <Form className="input-group">
      <label>{`ID : ${user._id}`}</label>
      <label>{`Nom & Prenom : ${user.personnelId.nom} ${user.personnelId.prenom}`}</label>
      <label>Login:</label>
      <input
        className="form-control"
        type="text"
        id="txtLogin"
        name="login"
        value={user.login}
        disabled={!enableChanges}
      ></input>
      <label>Password:</label>
      <input
        className="form-control"
        type="text"
        id="txtPassword"
        name="password"
        value={user.login}
        disabled={!enableChanges}
      ></input>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">User</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <Button
        name="changeButton"
        hidden={enableChanges}
        variant="primary"
        onClick={() => setEnableChanges(true)}
      >
        Change
      </Button>
      <Button name="saveButton" variant="primary" hidden={enableChanges}>
        Sauvegarder
      </Button>
      <Button name="cancelButton" variant="primary" hidden={enableChanges}>
        Annuler
      </Button>
    </Form>
  );
};

export default User;
