import React from "react";
import { Table } from "react-bootstrap";
/* dateCommande
total
isValidate
numero
clientId */
const ListeCommandes = ({ commandList }) => {
  return <Table>
    <thead>
      <th>numero</th>
      <th>Date Commande</th>
      <th>Etat</th>
      <th>Total</th>
      <th>Client</th>
    </thead>
  </Table>;
};

export default ListeCommandes;
