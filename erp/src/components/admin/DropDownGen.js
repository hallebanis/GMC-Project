import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropDownGen = ({ itemList, onPersonnelSelect }) => {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {itemList &&
          itemList.map((el) => (
            <Dropdown.Item
              id={el._id}
              onClick={(e) => onPersonnelSelect(e.target.id)}
            >{`${el.nom} ${el.prenom}`}</Dropdown.Item>
          ))}
      </DropdownButton>
    </div>
  );
};

export default DropDownGen;
