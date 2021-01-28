import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { modifyRole } from "../../actions/admin/usersActions";

const EditRoleModal = ({ role, info, setInfo }) => {
  const [show, setShow] = useState(false);
  const [disableSave, setdiSableSave] = useState(true);
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    setInfo({ id: "", titre: "" });
  };
  const handleSave = () => {
    dispatch(modifyRole(info));
    handleClose();
  };
  const handleShow = () => {
    setShow(true);
    setInfo({ id: role._id, titre: role.titre });
  };
  const handleChange = (e) => {
    setInfo({ ...info, titre: e.target.value });
    setdiSableSave(
      e.target.value !== "" && e.target.value !== role.titre ? false : true
    );
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CHANGING ROLE TITLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type="text" value={info.titre} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={disableSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditRoleModal;
