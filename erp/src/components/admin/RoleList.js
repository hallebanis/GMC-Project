import React, { useState } from "react";
import { Button, FormControl, Modal, Table } from "react-bootstrap";
import { deleteRole } from "../../actions/admin/usersActions";
import { useDispatch } from "react-redux";
import EditRoleModal from "./EditRoleModal";

const RoleList = ({ roleList }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteRole(id));
  };
  const [info, setInfo] = useState({
    id: "",
    titre: "",
  });
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {roleList &&
          roleList.map((elm, i) => (
            <tr id={i}>
              <td id={`id${elm._id}`}>{elm._id}</td>
              <td id={elm.titre}>{elm.titre}</td>
              <td id={elm._id}>
                <EditRoleModal role={elm} info={info} setInfo={setInfo} />
                <Button variant="danger" onClick={() => handleDelete(elm._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default RoleList;
