import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFournisseur } from "../../actions/GA/achatActions";
import MainNavBar from "../../components/admin/MainNavBar";
import GaSideNav from "../../components/GA/GaSideNav";
import ListeFournisseur from "../../components/GA/ListeFournisseur";

const ListeFournisseurPage = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFournisseur());
  }, [dispatch]);
  const achat = useSelector((state) => state.achat);
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
        <Col>
          <ListeFournisseur
            listFournisseur={achat.fournisseur}
            history={history}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ListeFournisseurPage;
