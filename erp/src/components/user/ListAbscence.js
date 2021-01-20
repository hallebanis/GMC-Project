import { MDBDataTable } from "mdbreact";
import React from "react";

const ListAbscence = ({ absence }) => {
  const data = {
    columns: [
      {
        label: "Date Depart",
        field: "DateDepart",
        sort: "desc",
        width: 300,
      },
      {
        label: "Date Reprise",
        field: "DateReprise",
        sort: "asc",
        width: 300,
      },
      {
        label: "motif",
        field: "motif",
        sort: "asc",
        width: 150,
      },
    ],
    rows: absence
      ? absence.map((el) => {
          console.log(el);
          return {
            DateDepart: el.dateDepart,
            DateReprise: el.dateReprise,
            motif: el.motif,
          };
        })
      : [],
  };

  return (
    <>
      <h3>Absence :</h3>
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

export default ListAbscence;
