import React, { useEffect } from "react";
import { loadRoles } from "../../actions/admin/usersActions";
import RoleList from "../../components/admin/RoleList";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../../components/admin/MainNavBar";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";

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
        <Col md="auto">
          <AdminDashboardSidebar
            color="rgb(52,58,64)"
            linkList={[
              {
                categorie: "Utilisateur",
                elements: [
                  { title: "User List", link: "/admin-dashboard/users" },
                  { title: "Add User", link: "/admin-dashboard/adduser" },
                ],
              },
              {
                categorie: "Roles",
                elements: [
                  {
                    title: "Role List",
                    link: "/admin-dashboard/roles",
                  },
                ],
              },
            ]}
          />
        </Col>
        <Col>
          <RoleList roleList={users.roles} />
        </Col>
      </Row>
    </Container>
  );
};

export default RolePage;
