import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ListPersonnel } from "../../components/GRH/ListPersonnel";
import { loadPersonnel } from "../../actions/GRH/personnelActions";
import { Container, Row, Col } from "react-bootstrap";
import { NavSide } from "../../components/GRH/NavSide";
import MainNavBar from "../../components/admin/MainNavBar";

export const ListPersonnelPage = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, [dispatch]);
  const personnel = useSelector((state) => state.personnel);
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
        <Col>
          <ListPersonnel list={personnel} />
        </Col>
      </Row>
    </Container>
  );
};
