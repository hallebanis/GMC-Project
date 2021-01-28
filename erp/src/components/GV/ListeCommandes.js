import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import { useDispatch } from "react-redux";
import { validateCommandeVente } from "../../actions/GV/venteActions";

const ListeCommandes = ({ commandList }) => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  const handleValidate = (id) => {
    dispatch(validateCommandeVente(id));
  };
  return (
    <Container>
      <MDBInput
        label="filter By Client / Date / TOTAL"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></MDBInput>

      <Table>
        <thead>
          <th>numero</th>
          <th>Date Commande</th>
          <th>Etat</th>
          <th>Total</th>
          <th>Client</th>
          <th></th>
        </thead>
        <tbody>
          {commandList
            .filter(
              (elm) =>
                elm.clientId.nom
                  .toUpperCase()
                  .trim()
                  .includes(filter.toUpperCase().trim()) ||
                elm.clientId.prenom
                  .toUpperCase()
                  .trim()
                  .includes(filter.toUpperCase().trim()) ||
                elm.dateCommande
                  .toString()
                  .toUpperCase()
                  .trim()
                  .includes(filter.toUpperCase().trim()) ||
                elm.total >= +filter
            )
            .map((el, i) => (
              <tr id={i}>
                <td id={`1${i}`}>{el.numero}</td>
                <td id={`2${i}`}>{el.dateCommande}</td>
                <td id={`3${i}`}>{el.isValidate ? "validé" : "non validé"}</td>
                <td id={`4${i}`}>{el.total}</td>
                <td
                  id={`5${i}`}
                >{`${el.clientId.nom} ${el.clientId.prenom}`}</td>
                <td id={`6${i}`}>
                  {!el.isValidate && (
                    <Button
                      id={el._id}
                      variant="success"
                      onClick={() => handleValidate(el._id)}
                    >
                      Valider
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListeCommandes;
