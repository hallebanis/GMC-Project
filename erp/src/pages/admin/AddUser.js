import React from "react";
import Form from "react-bootstrap/Form";
import PersonnelDropDown from "../../components/GRH/PersonnelDropDown";

const AddUser = ({ history }) => {
  return (
    <Form>
      <PersonnelDropDown dropDownMsg="choisit un personnel" />
    </Form>
  );
};

export default AddUser;
