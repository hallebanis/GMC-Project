import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Select } from "./DatePicker";
import { addPersonnel } from "../../actions/GRH/personnelActions";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { Paper, TextField, Typography } from "@material-ui/core";

export const AddPersonnelForm = () => {
  const classes = useStyles();
  const [disableSave, setDisableSave] = useState(true);
  const [selectedItem, setSelectedItem] = useState("choisit une categorie");
  const [info, setInfo] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    CIN: "",
    dateDeNaissance: "",
    lieuDeNaissance: "",
    matCnss: "",
    situationFamiliale: "",
    nombreEnfants: 0,
    categorie: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSelectItem = (e) => {
    setSelectedItem(e.target.text);
    setInfo({ ...info, categorie: e.target.text });
  };
  const handleSave = () => {
    dispatch(addPersonnel(info));
  };
  const handleDateChange = (d) => {
    setInfo({ ...info, dateDeNaissance: d });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6">Personnel Form</Typography>
        <TextField
          name="nom"
          type="text"
          variant="outlined"
          label="nom"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="prenom"
          type="text"
          variant="outlined"
          label="prenom"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="adresse"
          onChange={handleChange}
          type="text"
          variant="outlined"
          label="adresse"
          fullWidth
        />
        <TextField
          name="email"
          type="email"
          variant="outlined"
          label="email"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="CIN"
          type="text"
          variant="outlined"
          label="CIN"
          fullWidth
          onChange={handleChange}
        />
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>
            Date de naissance :
            <Select name="dateDeNaissance" onDateChange={handleDateChange} />
          </Form.Label>
        </Form.Group>
        <TextField
          name="lieuDeNaissance"
          type="text"
          variant="outlined"
          label="Lieu de naissance"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="matCnss"
          onChange={handleChange}
          type="text"
          variant="outlined"
          label="Matricule cnss"
          fullWidth
        />
        <TextField
          name="situationFamiliale"
          type="text"
          variant="outlined"
          label="Situation familiale"
          fullWidth
          multiline
          rows={4}
          onChange={handleChange}
        />
        <TextField
          name="nombreEnfants"
          type="text"
          variant="outlined"
          label="Nombre d'enfants"
          fullWidth
          onChange={(e) =>
            setInfo({ ...info, [e.target.name]: +e.target.value })
          }
        />
        <Form.Group as={Col} controlId="formGridEmail">
          <DropdownButton id="dropdown-basic-button" title={selectedItem}>
            <Dropdown.Item onClick={handleSelectItem}>A</Dropdown.Item>
            <Dropdown.Item onClick={handleSelectItem}>B</Dropdown.Item>
            <Dropdown.Item onClick={handleSelectItem}>C</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={handleSave}
        >
          Save
        </Button>
      </form>
    </Paper>
  );
};
