import { Paper, Typography } from "@material-ui/core";
import { MDBInput } from "mdbreact";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addService, loadService } from "../../actions/GRH/personnelActions";
import PersonnelDropDown from "./PersonnelDropDown";
import useStyles from "./styles";

export const ServiceForm = ({ history }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    nom: "",
    responsable: "",
  });
  useEffect(() => {
    dispatch(loadService());
  }, [dispatch]);
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleResponsableChange = (id) => {
    setInfo({ ...info, responsable: id });
  };
  const handleSave = () => {
    dispatch(addService(info));
    history.push("/grh-dashboard");
  };
  return (
    <Paper className={classes.paper} style={{ margin: "50px" }}>
      <Typography style={{ textAlign: "center" }} variant="h6">
        Service Form
      </Typography>
      <MDBInput
        onChange={handleChange}
        name="nom"
        type="textarea"
        label="Name"
        rows="2"
        icon="pencil-alt"
      />

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Responsable</Form.Label>
        <PersonnelDropDown
          onPersonnelChange={handleResponsableChange}
        ></PersonnelDropDown>
      </Form.Group>

      <Button variant="primary" /* type="submit" */ onClick={handleSave}>
        Submit
      </Button>
    </Paper>
  );
};
