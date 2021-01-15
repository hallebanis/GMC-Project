import React from "react";
import { Button, Table } from "react-bootstrap";

export const ListPersonnel = ({ list }) => {
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
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
