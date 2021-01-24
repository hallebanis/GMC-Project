import { MDBInput } from "mdbreact";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategorie } from "../../actions/GA/achatActions";
import MainNavBar from "../../components/admin/MainNavBar";
import AjoutCategorieModal from "../../components/GA/AjoutCategorieModal";
import CategorieList from "../../components/GA/CategorieList";
import GaSideNav from "../../components/GA/GaSideNav";

const Categorie = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorie());
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
        <Col sm={0} md={3} style={{ height: "90vh" }}>
          <GaSideNav />
        </Col>
        <Col md={9}>
          <MDBInput
            label="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <CategorieList
            categorieList={achat.categorie.filter(
              (el) =>
                el.designation
                  .toUpperCase()
                  .trim()
                  .includes(filter.toUpperCase().trim()) ||
                el.reference
                  .toUpperCase()
                  .trim()
                  .includes(filter.toUpperCase().trim())
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Categorie;
