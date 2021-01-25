import React from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteFournisseur } from "../../actions/GA/achatActions";
import EditFournisseurModal from "./EditFournisseurModal";
import { RiDeleteBin6Line } from "react-icons/ri";

const ListeFournisseur = ({ listFournisseur, history }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFournisseur(id));
  };
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Matricule</th>
            <th>Raison Social</th>
            <th>Tel</th>
            <th>email</th>
            <th>Numero de Compte</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listFournisseur.map((el, i) => (
            <tr id={i}>
              <td id={`${i}-1`}>{el.matricule}</td>
              <td id={`${i}-2`}>{el.nom}</td>
              <td id={`${i}-3`}>{el.numTel}</td>
              <td id={`${i}-4`}>{el.email}</td>
              <td id={`${i}-5`}>{el.compteBancaire}</td>
              <td id={`${el._id}`}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <EditFournisseurModal fournisseur={el} />
                  <Button variant="danger" onClick={() => handleDelete(el._id)}>
                    <RiDeleteBin6Line />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <Button
          variant="primary"
          onClick={() => history.push("/ga-dashboard/addFournisseur")}
        >
          New Fournisseur
        </Button>
      </Table>
    </Container>
  );
};

export default ListeFournisseur;
