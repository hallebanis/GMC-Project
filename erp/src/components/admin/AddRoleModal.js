import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import { useSelector, useDispatch } from "react-redux";
import { addRole, loadRoles } from "../../actions/admin/usersActions";
const AddRoleModal = () => {
  const users = useSelector((state) => state.users);
  const [disableSave, setDisableSave] = useState(true);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({ titre: "" });
  const [warn, setwarn] = useState("");
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    setInfo({ titre: "" });
    setDisableSave(true);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    setDisableSave(
      !users.roles.some((elm) => elm.titre === e.target.value) &&
        e.target.value !== ""
        ? false
        : true
    );
    setwarn(
      users.roles.some((elm) => elm.titre === e.target.value)
        ? `Le role ${e.target.value} existe déja !`
        : ""
    );
  };
  const handleSave = () => {
    dispatch(addRole(info));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Role
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADDING NEW ROLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            name="titre"
            type="text"
            value={info.titre}
            onChange={handleChange}
          ></FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={disableSave} onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
        <h5 className="warningMessage">{warn}</h5>
      </Modal>
    </>
  );
};

export default AddRoleModal;
