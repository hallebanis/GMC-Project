import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduit } from "../../actions/GA/achatActions";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";

function ListProduit({ listProduit }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteProduit(id));
  };
  return (
    <MDBCard>
      <MDBCardTitle>Liste des produits</MDBCardTitle>
      <MDBCardBody>
        <Table>
          <thead>
            <th>Designation</th>
            <th>Prix de Vente HT</th>
            <th>Quantite en stock</th>
            <th>Categorie</th>
            {/*    <th>Fournisseur</th> */}
            <th>Delete</th>
          </thead>
          <tbody>
            {listProduit.map((el) => (
              <tr>
                <td>{el.designation}</td>
                <td>{el.prixVenteHT}</td>
                <td>{el.qteStock}</td>
                <td>{el.idCategorie.designation}</td>
                {/* <td>{el.idFournisseur.nom}</td> */}
                <td>
                  <Button variant="danger" onClick={() => handleDelete(el._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ListProduit;
