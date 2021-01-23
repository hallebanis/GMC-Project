import React, { useEffect } from "react";
import GvSidebar from "../../components/GV/GvSidebar";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import image from "../../res/img/system.png";
import { useSelector } from "react-redux";

const GvDashboard = ({ history }) => {
  const auth = useSelector((state) => state.auth);
   useEffect(() => {
    if (!auth.isAuth) history.GoBack();
    //push("/");
  }, [auth]); 
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <GvSidebar />
        </Col>
        <Col style={{ height: "90vh", paddingLeft: '0' }}>
          <img
            style={{
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "auto",
              display: "block",
            }}
            src={image}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GvDashboard;
