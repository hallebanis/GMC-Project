import React, { useState } from "react";
import useStyles from "./styles";
import { Paper, TextField, Typography } from "@material-ui/core";
import { Button, Col, Form } from "react-bootstrap";
import { Select } from "./DatePicker";
import { useDispatch } from "react-redux";
import PersonnelDropDown from "./PersonnelDropDown";
import { addAvance, loadPersonnel } from "../../actions/GRH/personnelActions";

export const AvanceForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [info, setInfo] = useState({
    date: "",
    montant: "",
    idPersonnel: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleChangeDate = (el) => {
    setInfo({ ...info, date: el });
  };
  const handleSave = () => {
    dispatch(addAvance(info))
    dispatch(loadPersonnel());
  };
  const handleSelect = (id) => {
    setInfo({ ...info, idPersonnel: id });
  };


  return (
    <div>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <Typography variant="h6">Avance Form</Typography>
          <TextField
            name="montant"
            type="text"
            variant="outlined"
            label="montant"
            fullWidth
            onChange={handleChange}
          />
          <PersonnelDropDown onPersonnelChange={handleSelect}>
            {" "}
          </PersonnelDropDown>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Date :
              <Select name="date" onDateChange={handleChangeDate} />
            </Form.Label>
          </Form.Group>

          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            /* type="submit" */
            fullWidth
            onClick={handleSave}
          >
            Save
          </Button>
        </form>
      </Paper>
    </div>
  );
};
