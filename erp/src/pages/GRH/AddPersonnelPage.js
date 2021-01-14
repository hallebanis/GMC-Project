import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPersonnel } from "../../actions/GRH/personnelActions";
import { AddPersonnelForm } from "../../components/GRH/AddPersonnelForm";

const AddPersonnelPage = ({history}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, []);
  return (
    <div>
      <AddPersonnelForm history={history}/>
    </div>
  );
};

export default AddPersonnelPage;
