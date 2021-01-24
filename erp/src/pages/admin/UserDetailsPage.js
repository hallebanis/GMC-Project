import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";
import SideNav from "../../components/admin/SideNav";
import User from "../../components/admin/User";

const UserDetailsPage = ({ match, history }) => {
  const users = useSelector((state) => state.users);
  const [changeMaid, setChangeMaid] = useState("false");
  const user = users.users.filter((elm) => elm._id === match.params.id);
  useEffect(() => {
    if (changeMaid === true) history.push("/admin-dashboard/users");
  }, [changeMaid]);
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
        <Col>
          <User user={user[0]} changeMaid={setChangeMaid} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetailsPage;
