import React, { useEffect } from "react";
import { loadRoles } from "../../actions/admin/usersActions";
import RoleList from "../../components/admin/RoleList";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import SideNav from "../../components/admin/SideNav";

const RolePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRoles());
  }, []);
  const users = useSelector((state) => state.users);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar></MainNavBar>
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <SideNav />
        </Col>
        <Col>
          <RoleList roleList={users.roles} />
        </Col>
      </Row>
    </Container>
  );
};

export default RolePage;
