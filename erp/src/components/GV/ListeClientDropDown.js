import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdbreact";
import React, { useState } from "react";

const ListeClientDropDown = ({ listeClient, setClientId }) => {
  const [selectedItem, setSelectedItem] = useState("Select Client");
  const handleItemChange = (e) => {
    setSelectedItem(e.targer.text);
    setClientId(e.target.id);
  };
  return (
    <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
        {selectedItem}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        {listeClient.map((el) => (
          <MDBDropdownItem
            id={el._id}
            onClick={handleItemChange}
          >{`${el.nom} ${el.prenom}`}</MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default ListeClientDropDown;
