import { MDBInput } from "mdbreact";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../../actions/GV/venteActions";
import GvSidebar from "../../components/GV/GvSidebar";
import FiltredClientList from "./FiltredClientList";
import MainNavBar from "../../components/admin/MainNavBar";

const ListeClients = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient());
  }, [dispatch]);
  const vente = useSelector((state) => state.vente);
  const [filter, setFilter] = useState("");
  return (
    <Container fluid>
      <Row>
        {" "}
        <Col>
          <MainNavBar />{" "}
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <GvSidebar />
        </Col>
        <Col>
          <MDBInput
            label="Filter"
            onChange={(e) => setFilter(e.target.value)}
          />
          <FiltredClientList
            clientList={vente.client.filter(
              (el) =>
                el.nom.toUpperCase().includes(filter.toUpperCase()) ||
                el.prenom.toUpperCase().includes(filter.toUpperCase()) ||
                el.email.toUpperCase().includes(filter.toUpperCase())
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ListeClients;
