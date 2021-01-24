import React from "react";
import { Table } from "react-bootstrap";
/* dateCommande
total
isValidate
numero
clientId */
const ListeCommandes = ({ commandList }) => {
  return (
    <Table>
      <thead>
        <th>numero</th>
        <th>Date Commande</th>
        <th>Etat</th>
        <th>Total</th>
        <th>Client</th>
      </thead>
      <tbody>
        {commandList.map((el) => (
          <tr>
            <td>{el.numero}</td>
            <td>{el.dateCommande}</td>
            <td>{el.isValidate ? "validé" : "non validé"}</td>
            <td>{el.total}</td>
            <td>{`${el.clientId.nom} ${el.clientId.prenom}`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListeCommandes;
