import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdbreact";
import React, { useState } from "react";

const ListProduitDropDown = ({ listeProduit, setProduitId }) => {
  const [selectedItem, setSelectedItem] = useState("Select Client");
  const handleItemChange = (e) => {
    setSelectedItem(e.targer.text);
    setProduitId(e.target.id);
  };
  return (
    <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
        {selectedItem}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        {listeProduit.map((el) => (
          <MDBDropdownItem
            id={el._id}
            onClick={handleItemChange}
          >{`${el.nom} ${el.prenom}`}</MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default ListProduitDropDown;
