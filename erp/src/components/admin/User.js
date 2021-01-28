import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { modifyUser } from "../../actions/admin/usersActions";
import RoleDropDown from "./RoleDropDown";
import { useDispatch } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBInput,
} from "mdbreact";
import { VscSave } from "react-icons/vsc";
import { ImCancelCircle } from "react-icons/im";
import { FiEdit2 } from "react-icons/fi";

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
    <Form>
      <MDBContainer>
        <MDBCard className="w-75 mb-4">
          <MDBCardBody>
            <MDBCardTitle>
              {" "}
              {`Nom & Prenom : ${user.personnelId.nom} ${user.personnelId.prenom}`}
            </MDBCardTitle>
            <MDBCardText>{`ID : ${user._id}`}</MDBCardText>
            <MDBInput
              id="txtLogin"
              name="login"
              value={info.login}
              disabled={!enableChanges}
              onChange={handleInfoChange}
            />
            <MDBInput
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
            />
            <Form.Group>
              <RoleDropDown
                info={info}
                dropDownMsg={roleTitle ? roleTitle : "aucun"}
                setRoleTitle={setRoleTitle}
                setInfo={setInfo}
                disableChange={!enableChanges}
              />
            </Form.Group>
            <Button
              name="changeButton"
              hidden={enableChanges}
              variant="primary"
              onClick={() => setEnableChanges(true)}
            >
              <FiEdit2 />
            </Button>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Button
                name="saveButton"
                variant="primary"
                hidden={!enableChanges}
                onClick={handleSave}
              >
                <VscSave />
              </Button>
              <Button
                variant="danger"
                onClick={handleCancelChanges}
                name="cancelButton"
                hidden={!enableChanges}
              >
                <ImCancelCircle />
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      <h5 className="errorTitle">{errorCheck ? errorCheck : null}</h5>
    </Form>
  );
};

export default User;
