import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategorie } from "../../actions/GA/achatActions";
import MainNavBar from "../../components/admin/MainNavBar";
import GaSideNav from "../../components/GA/GaSideNav";
import image from "../../res/img/system.png";

const GaDashboard = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCategorie()), [dispatch]);
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
        <Col style={{ height: "90vh", paddingLeft: "0" }}>
          <img
            style={{
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "auto",
              display: "block",
            }}
            src={image}
            alt="none"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GaDashboard;
