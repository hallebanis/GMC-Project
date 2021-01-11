import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadPersonnel } from "../../actions/GRH/personnelActions";

const PersonnelDropDown = ({ onPersonnelChange }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, []);

  const [selectedItem, setSelectedItem] = useState("choisit Personnel");

  const personnelList = useSelector((state) => state.personnel);

  const handleSelect = (e) => {
    setSelectedItem(e.target.text);
    onPersonnelChange(e.target.id);
  };
  return (
    <DropdownButton id="dropdown-basic-button" title={selectedItem}>
      {personnelList.personnel
        ? personnelList.personnel.map((elm) => (
            <Dropdown.Item id={elm._id} onClick={handleSelect}>
              {`${elm.nom} ${elm.prenom}`}
            </Dropdown.Item>
          ))
        : null}
    </DropdownButton>
  );
};

export default PersonnelDropDown;
