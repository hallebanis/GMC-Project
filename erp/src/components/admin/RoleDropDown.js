import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loadRoles } from "../../actions/admin/usersActions";
import { useDispatch } from "react-redux";

const RoleDropDown = ({
  disableChange,
  setRoleTitle,
  setInfo,
  dropDownMsg,
  info,
  onRoleChange,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRoles());
  }, []);

  const [selectedItem, setSelectedItem] = useState(dropDownMsg);

  const rolesList = useSelector((state) => state.users);
  const handleSelectItem = (e) => {
    if (setRoleTitle) setRoleTitle(e.target.text);
    if (setInfo) setInfo({ ...info, role: e.target.id });
    setSelectedItem(e.target.text);
    if (onRoleChange) onRoleChange(e.target.id);
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
