import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdbreact";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ListProduitDropDown = ({ listeProduit, setProduitId }) => {
  const handleItemChange = (e) => {
    setProduitId(e.target.id);
  };
  return (
    <Form.Group controlId="exampleForm.ControlSelect2">
      <Form.Control as="select">
        {listeProduit.map((el) => (
          <option
            id={el._id}
            onClick={handleItemChange}
          >{`${el.designation}`}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default ListProduitDropDown;
