import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdbreact";
import React, { useState } from "react";

const ListProduitDropDown = ({
  listeProduit,
  setlisteLigneVente,
  listeLigneVente,
  id,
}) => {
  const [selectedItem, setSelectedItem] = useState("Product List");
  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
    setlisteLigneVente(
      listeLigneVente.map((el) => {
        if (el.id === id)
          return {
            ...el,
            sousTotal: +e.target.name * el.quantité,
            produitId: e.target.id,
            pu: +e.target.name,
          };
        return el;
      })
    );
  };

  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        {selectedItem}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        {listeProduit.map((el) => (
          <MDBDropdownItem
            id={el._id}
            name={el.prixVenteHT}
            onClick={handleItemChange}
            value={el.designation}
          >
            {el.designation}
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default ListProduitDropDown;
