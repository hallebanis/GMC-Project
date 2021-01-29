import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDemande, updateDemande } from "../../actions/GRH/personnelActions";
import MainNavBar from "../../components/admin/MainNavBar";
import { NavSide } from "../../components/GRH/NavSide";

const Demandes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDemande());
  }, [dispatch]);
  let d = new Date(Date.now());
  const personnel = useSelector((state) => state.personnel);

  const handleReception = (e) => {
    let id = e.target.id;
    dispatch(updateDemande({ id: id, dateReception: d }));
    dispatch(getDemande());
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row height="80vh">
        <Col md={2}>
          <NavSide />
        </Col>
        <Col md={2}></Col>
        <Col md={7} className="dataCol">
          <Table hover bordered>
            <thead>
              <tr>
                <th>Sender</th>
                <th>Date Envoi</th>
                <th>Sujet</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {personnel.demande
                .filter((elm) => elm.etat === "envoyée")
                .map((el, i) => (
                  <tr id={i}>
                    <td id={i + "7"}>{el.personnelId.nom}</td>
                    <td id={i + "8"}>{el.dateEnvoie}</td>
                    <td id={i + "9"}>{el.sujet}</td>
                    <td id={i + "10"}>
                      <Button id={el._id} onClick={handleReception}>
                        Reçu
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Demandes;
