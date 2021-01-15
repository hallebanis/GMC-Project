import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {deletePersonnel} from "../../actions/GRH/personnelActions";
import { Link } from "react-router-dom";

export const ListPersonnel = ({ list }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePersonnel(id));
  };
  
  return (
    <>
      <Table hover striped bordered>
        <thead>
          <th>Id</th>
          <th>Nom et prenom</th>
          <th>Matricule</th>
          <th>Action</th>
        </thead>
        <tbody>
          {list.personnel.length > 0 &&
            list.personnel.map((elm, i) => (
              <tr id={i}>
                <td id={elm._id}>{elm._id}</td>
                <td id={`1-${i}`}>{`${elm.nom} ${elm.prenom}`}</td>
                <td id={`2-${i}`}>{`${elm.matricule}`}</td>
                <td>
                  <Button variant="primary" >
                    <Link style={{color : "white"}} to={`/personnel/${elm._id}`}>Edit</Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(elm._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
