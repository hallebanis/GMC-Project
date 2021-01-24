import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPersonnel } from "../../actions/GRH/personnelActions";
import { AddPersonnelForm } from "../../components/GRH/AddPersonnelForm";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import { Col, Container, Row } from "react-bootstrap";
import { NavSide } from "../../components/GRH/NavSide";
import MainNavBar from "../../components/admin/MainNavBar";

const AddPersonnelPage = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar color="#343A40"></MainNavBar>
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
