import React from "react";
import { Table } from "react-bootstrap";
import AjoutCategorieModal from "./AjoutCategorieModal";

const CategorieList = ({ categorieList }) => {
  return (
    <Table hover bordered>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Ref</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        {categorieList.map((el) => (
          <tr>
            <td>{el._id}</td>
            <td>{el.reference}</td>
            <td>{el.designation}</td>
          </tr>
        ))}
        <tr>
          <AjoutCategorieModal />
        </tr>
      </tbody>
    </Table>
  );
};

export default CategorieList;
