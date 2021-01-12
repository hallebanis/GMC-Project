import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser, loadUsers } from "../../actions/admin/usersActions";
import PersonnelDropDown from "../GRH/PersonnelDropDown";
import RoleDropDown from "./RoleDropDown";

const AddUserForm = ({ history }) => {
  const [disableChange, setDisableChange] = useState(true);
  const [disableSave, setDisableSave] = useState(true);
  const [showPassword, setShowPassword] = useState("password");
  const [statu, setStatu] = useState("");
  const [info, setInfo] = useState({
    login: "",
    password: "",
    personnelId: "",
    role: "",
  });
  const handlePersonnelSelect = (val) => {
    setInfo({ ...info, personnelId: val });
    setDisableSave(
      info.login !== "" &&
        info.password !== "" &&
        info.personnelId !== "" &&
        info.role !== ""
        ? false
        : true
    );
    setDisableChange(false);
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });

    setDisableSave(
      info.login !== "" &&
        info.password !== "" &&
        info.personnelId !== "" &&
        info.role !== ""
        ? false
        : true
    );
  };
  const handleRoleChange = (val) => {
    setInfo({ ...info, role: val });
    setDisableSave(
      info.login !== "" &&
        info.password !== "" &&
        info.personnelId !== "" &&
        info.role !== ""
        ? false
        : true
    );
  };
  const handleCancel = () => {
    history.goBack();
  };
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addUser(info));
    setStatu("Utilisateur Ajouté Avec Succées");
    dispatch(loadUsers());
    history.push("/admin-dashboard/users");
  };
  return (
    <Container>
      <Form>
        <Form.Group>
          <PersonnelDropDown
            onPersonnelChange={handlePersonnelSelect}
            dropDownMsg="choisit un personnel"
          />
          <Form.Label htmlFor="login" srOnly>
            Login
          </Form.Label>
          <Form.Control
            id="login"
            type="text"
            placeholder="Login"
            value={info.login}
            onChange={handleChange}
            disabled={disableChange}
          />
          <Form.Label htmlFor="password" srOnly>
            Password
          </Form.Label>
          <InputGroup>
            <FormControl
              disabled={disableChange}
              id="password"
              placeholder="Password"
              type={showPassword}
              value={info.password}
              onChange={handleChange}
            />
            <InputGroup.Prepend>
              <InputGroup.Text
                onMouseDown={() => setShowPassword("text")}
                onMouseUp={() => setShowPassword("password")}
              >
                show
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
          <RoleDropDown
            onRoleChange={handleRoleChange}
            dropDownMsg="select a role"
            disableChange={disableChange}
          />
          <Button
            type="submit"
            disabled={disableSave}
            onClick={() => handleSave(info)}
          >
            Créer
          </Button>
          <Button type="reset" onClick={handleCancel}>
            Annuler
          </Button>
        </Form.Group>
      </Form>
      <h3 className="successMessage">{statu ? statu : null}</h3>
    </Container>
  );
};

export default AddUserForm;
