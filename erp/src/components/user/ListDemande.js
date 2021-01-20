import { MDBDataTable } from "mdbreact";
import React from "react";

const ListDemande = ({ demande }) => {
  const data = {
    columns: [
      {
        label: "Sujet",
        field: "sujet",
        sort: "desc",
        width: 300,
      },
      {
        label: "Date Envoie",
        field: "dateEnvoie",
        sort: "asc",
        width: 300,
      },
      {
        label: "description",
        field: "description",
        sort: "asc",
        width: 150,
      },
      {
        label: "Etat",
        field: "etat",
        sort: "asc",
        width: 150,
      },
      {
        label: "Date Reception",
        field: "dateReception",
        sort: "asc",
        width: 150,
      },
      {
        label: "date Decision",
        field: "dateDecision",
        sort: "asc",
        width: 150,
      },
    ],
    rows: demande
      ? demande.map((el) => {
          return {
            sujet: el.sujet,
            dateEnvoie: el.dateEnvoie,
            description: el.description,
            etat: el.etat,
            dateReception: el.dateReception || "N/A",
            dateDecision: el.dateDecision || "N/A",
          };
        })
      : [],
  };

  return (
    <>
      <h3>Demandes :</h3>
      <MDBDataTable
        tbodyColor="white"
        entriesOptions={[5, 20, 25]}
        entries={5}
        striped
        bordered
        small
        data={data}
      />
    </>
  );
};

export default ListDemande;
