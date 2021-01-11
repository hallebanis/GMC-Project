import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { modifyUser } from "../../actions/admin/usersActions";
import RoleDropDown from "./RoleDropDown";
import { useDispatch } from "react-redux";

const User = ({ user, changeMaid }) => {
  const [enableChanges, setEnableChanges] = useState(false);
  const [info, setInfo] = useState({
    id: user._id,
    login: user.login,
    password: "******",
    role: user.role._id,
  });
  const [errorCheck, setErrorCheck] = useState("");
  const [roleTitle, setRoleTitle] = useState(user.role.titre);
  const handleInfoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    setErrorCheck("");
  };
  const dispatch = useDispatch();
  const handleSave = () => {
    if (info.login.length < 6) {
      setErrorCheck("Login doit etre > 6 caractéres");
    } else if (info.password.length < 6) {
      setErrorCheck("mot de passe doit etre >= 6 caractéres");
    } else {
      if (info.password === "******") {
        dispatch(modifyUser({ ...info, password: "" }));
        changeMaid(true);
      } else {
        dispatch(modifyUser(info));
        changeMaid(true);
      }
      setErrorCheck("");
    }
  };
  const handleCancelChanges = () => {
    setEnableChanges(false);
    setInfo({
      login: user.login,
      password: "******",
      role: user.role._id,
    });
    setRoleTitle(user.role.titre);
    setErrorCheck("");
  };

  const handlePasswordFocusOut = (e) => {
    if (e.target.value === "") setInfo({ ...info, password: "******" });
  };
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
        value={info.login}
        disabled={!enableChanges}
        onChange={handleInfoChange}
      ></input>
      <label>Password:</label>
      <input
        className="form-control"
        type="password"
        id="txtPassword"
        name="password"
        value={info.password}
        disabled={!enableChanges}
        onChange={handleInfoChange}
        onFocus={() => {
          setInfo({ ...info, password: "" });
        }}
        onBlur={handlePasswordFocusOut}
      ></input>
      <RoleDropDown
        info={info}
        dropDownMsg={roleTitle ? roleTitle : "aucun"}
        setRoleTitle={setRoleTitle}
        setInfo={setInfo}
        disableChange={!enableChanges}
      />
      <Button
        name="changeButton"
        hidden={enableChanges}
        variant="primary"
        onClick={() => setEnableChanges(true)}
      >
        Change
      </Button>
      <Button
        name="saveButton"
        variant="primary"
        hidden={!enableChanges}
        onClick={handleSave}
      >
        Sauvegarder
      </Button>
      <Button
        onClick={handleCancelChanges}
        name="cancelButton"
        variant="primary"
        hidden={!enableChanges}
      >
        Annuler
      </Button>
      <h5 className="errorTitle">{errorCheck ? errorCheck : null}</h5>
    </Form>
  );
};

export default User;
