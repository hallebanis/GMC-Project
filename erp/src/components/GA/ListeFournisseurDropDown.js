import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import { Dropdown } from "react-bootstrap";


const ListeFournisseurDropDown = ({ listeFournisseur }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [filter, setFilter] = useState("");
  const handleItemChange = (e) => {
    setSelectedItem(e.target.text);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedItem || "Choisit un Fournisseur"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <MDBInput
          label="filter"
          onChange={(e) => setFilter(e.target.value)}
        ></MDBInput>
        {listeFournisseur.length > 0 &&
          listeFournisseur
            .filter((elm) =>
              elm.nom.toUpperCase().trim().includes(filter.toUpperCase().trim())
            )
            .map((el) => (
              <Dropdown.Item id={el._id} onClick={handleItemChange}>
                {el.nom}
              </Dropdown.Item>
            ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ListeFournisseurDropDown;
