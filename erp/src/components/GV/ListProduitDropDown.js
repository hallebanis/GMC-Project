import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput,
} from "mdbreact";
import React, { useState } from "react";

const ListProduitDropDown = ({
  listeProduit,
  setlisteLigneVente,
  listeLigneVente,
  id,
  disabled,
  setProductFilter,
}) => {
  const [selectedItem, setSelectedItem] = useState("Product List");
  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
    setlisteLigneVente(
      listeLigneVente.map((el) => {
        if (el.id === id)
          return {
            ...el,
            enableChange: true,
            sousTotal: +e.target.name * el.quantité,
            produitId: e.target.id,
            pu: +e.target.name,
          };
        return el;
      })
    );
  };

  return (
    <MDBDropdown disabled={disabled}>
      <MDBDropdownToggle caret color="primary">
        {disabled ? "Choisit Un Client" : selectedItem}
      </MDBDropdownToggle>

      <MDBDropdownMenu basic>
        <MDBInput
          label="Product Filter"
          onChange={(e) => setProductFilter(e.target.value)}
        />
        {!disabled &&
          listeProduit.map((el) => (
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
