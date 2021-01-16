import React from "react";
import AddClientForm from "../../components/GV/AddClientForm";

const AddClient = ({ history }) => {
  return (
    <div>
      <h1>addclient</h1>
      <AddClientForm history={history} />
    </div>
  );
};

export default AddClient;
