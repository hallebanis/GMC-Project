import { MDBBtn } from "mdbreact";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { addAbsence } from "../../actions/GRH/personnelActions";
import MotifAbsenceModal from "./MotifAbsenceModal";
const ListePointage = ({ modified, setModified, personnelList }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Matricule</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {personnelList.map((el, i) => {
          return (
            <tr id={i}>
              <td id={`1-${i}`}>{el.matricule}</td>
              <td id={`2-${i}`}>{el.nom}</td>
              <td id={`3-${i}`}>{el.prenom}</td>
              <td id={`4-${i}`}>
                <MotifAbsenceModal
                  modified={modified}
                  setModified={setModified}
                  personnel={el}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListePointage;
