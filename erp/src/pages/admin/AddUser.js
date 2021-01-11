import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import AddUserForm from "../../components/admin/AddUserForm";
import PersonnelDropDown from "../../components/GRH/PersonnelDropDown";

const AddUser = ({ history }) => {
  return <AddUserForm history={history} />;
};

export default AddUser;
