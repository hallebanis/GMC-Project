import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import PersonnelDropDown from "../../components/GRH/PersonnelDropDown";
import { editService } from "../../actions/GRH/personnelActions";
import { useDispatch, useSelector } from "react-redux";

export const ServiceDetailsPage = ({ match, history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    nom: "",
    responsable: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleResponsableChange = (id) => {
    setInfo({ ...info, responsable: id });
  };
  const handleEdit = () => {
    dispatch(editService(info, match.params.id));
  };
  return (
    <MDBRow>
      <MDBCol md="4" className="mb-3">
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Name
        </label>
        <input
          name="nom"
          onChange={handleChange}
          type="text"
          id="defaultFormRegisterNameEx"
          className="form-control"
          placeholder="name"
        />
      </MDBCol>
      <MDBCol md="4" className="mb-3">
        <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">
          <PersonnelDropDown onPersonnelChange={handleResponsableChange} />
        </label>
      </MDBCol>
      <MDBBtn
        type="button"
        onClick={handleEdit}
        gradient="blue"
        rounded
        className="btn-block z-depth-1a"
      >
        Save
      </MDBBtn>
    </MDBRow>
  );
};
