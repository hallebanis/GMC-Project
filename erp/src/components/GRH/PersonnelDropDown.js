import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loadRoles } from "../../actions/admin/usersActions";
import { useDispatch } from "react-redux";
import { loadPersonnel } from "../../actions/GRH/personnelActions";

const RoleDropDown = ({
  disableChange,
  setRoleTitle,
  setInfo,
  dropDownMsg,
  info,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, []);

  const [selectedItem, setSelectedItem] = useState(dropDownMsg);

  const rolesList = useSelector((state) => state.users);
  const handleSelectItem = (e) => {
    if (setRoleTitle) setRoleTitle(e.target.text);
    if (setInfo) setInfo({ ...info, role: e.target.id });
    setSelectedItem(e.target.text);
  };
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedItem}
      disabled={disableChange}
    >
      {rolesList.roles
        ? rolesList.roles.map((elm) => (
            <Dropdown.Item id={elm._id} onClick={handleSelectItem}>
              {elm.titre}
            </Dropdown.Item>
          ))
        : null}
    </DropdownButton>
  );
};

export default RoleDropDown;
