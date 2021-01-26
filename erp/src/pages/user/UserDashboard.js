import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadPersonnelById } from "../../actions/authentification/authActions";
import MainNavBar from "../../components/admin/MainNavBar";
import PersonnelInfo from "../../components/user/PersonnelInfo";
import UserSideNav from "../../components/user/UserSideNav";

const UserDashboard = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnelById(auth.user.personnelId._id));
  }, [dispatch, auth.user.personnelId._id]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <UserSideNav />
        </Col>
        <Col>
          <PersonnelInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
