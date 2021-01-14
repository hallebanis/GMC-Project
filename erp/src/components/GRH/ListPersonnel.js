import React from "react";

export const ListPersonnel = ({ list }) => {
  return (
    <div>
      {list.length && list.map((el) => (
        <row>
          <col>{el._id}</col>
          <col>{el.nom}</col>
          <col>{el.prenom}</col>
          <col>{el.matricule}</col>
        </row>
      ))}
    </div>
  );
};
