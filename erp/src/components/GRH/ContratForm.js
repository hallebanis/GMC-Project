import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addContrat,
  loadContrat,
  loadPersonnel,
} from "../../actions/GRH/personnelActions";
import { Paper, Typography } from "@material-ui/core";
import { ListService } from "../../components/GRH/ListService";
import MainNavBar from "../admin/MainNavBar";
import { Select } from "./DatePicker";
import { NavSide } from "./NavSide";
import PersonnelDropDown from "./PersonnelDropDown";
import useStyles from "./styles";

export const ContratForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContrat());
  }, []);

  const [info, setInfo] = useState({
    dateDebut: "",
    dateFin: "",
    salaireDeBase: "",
    typeContrat: "",
    idPersonnel: "",
  });
  const handleSelect = (id) => {
    setInfo({ ...info, idPersonnel: id });
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleDateChange = (d) => {
    setInfo({ ...info, dateDebut: d });
  };
  const handleDate = (a) => {
    setInfo({ ...info, dateFin: a });
  };
  const handleSave = () => {
    dispatch(addContrat(info));
    dispatch(loadPersonnel());
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar></MainNavBar>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          {" "}
          <NavSide />
        </Col>
        <Col md={6}>
          <Paper className={classes.paper} style={{ margin: "50px" }}>
            <Typography style={{ textAlign: "center" }} variant="h6">
              Contrat Form
            </Typography>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>salaire de base</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInfo({ ...info, [e.target.name]: +e.target.value })
                }
                name="salaireDeBase"
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>type contrat</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="typeContrat"
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Date Debut :
                <Select name="dateDebut" onDateChange={handleDateChange} />
              </Form.Label>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                Date Fin : <Select name="dateFin" onDateChange={handleDate} />
              </Form.Label>
            </Form.Group>
            <PersonnelDropDown onPersonnelChange={handleSelect}>
              {" "}
            </PersonnelDropDown>
            <Button variant="primary" onClick={handleSave}>
              Submit
            </Button>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
};
