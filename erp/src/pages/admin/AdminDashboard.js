import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MainNavBar from "../../components/admin/MainNavBar";
import SideNav from "../../components/admin/SideNav";
import dashboardCover from "../../res/img/dashboardCover.jpg";

const AdminDashboard = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>

      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <SideNav />
        </Col>
        <Col md={9} lg={9} style={{ paddingLeft: "0", margin: "0" }}>
          <Image
            style={{
              height: "100%",
              maxWidth: "200%",
              maxHeight: "100%",
              width: "100%",
              margin: "0",
              padding: "0",
            }}
            src={dashboardCover}
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
