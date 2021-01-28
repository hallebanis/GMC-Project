import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPersonnel } from "../../actions/GRH/personnelActions";
import { AddPersonnelForm } from "../../components/GRH/AddPersonnelForm";
import { Col, Container, Row } from "react-bootstrap";
import { NavSide } from "../../components/GRH/NavSide";
import MainNavBar from "../../components/admin/MainNavBar";

const AddPersonnelPage = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, [dispatch]);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar></MainNavBar>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <NavSide />
        </Col>
        <Col md={6}>
          {" "}
          <AddPersonnelForm history={history} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddPersonnelPage;
