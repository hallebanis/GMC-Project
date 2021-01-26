import { MDBInput } from "mdbreact";
import { getCategorie, getProduit } from "../../actions/GA/achatActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListProduit from "./ListProduit";
import { Button, Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import GaSideNav from "../../components/GA/GaSideNav";

const Produits = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorie());
    dispatch(getProduit());
  }, [dispatch]);
  const achat = useSelector((state) => state.achat);
  const [filter, setFilter] = useState("");
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <GaSideNav />
        </Col>
        <Col md={1}></Col>
        <Col md={6}>
          <MDBInput
            label="Filter"
            onChange={(e) => setFilter(e.target.value)}
          />
          <ListProduit
            listProduit={achat.produit.filter(
              (el) =>
                el.designation.toUpperCase().includes(filter.toUpperCase()) ||
                el.idCategorie.designation
                  .toUpperCase()
                  .includes(filter.toUpperCase())
            )}
          />
          <Button onClick={() => history.push("/ga-dashboard/addProduit")}>
            Add Product
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Produits;
