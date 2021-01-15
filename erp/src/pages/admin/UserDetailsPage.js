import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import MainNavBar from "../../components/admin/MainNavBar";
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
          <User user={user[0]} changeMaid={setChangeMaid} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetailsPage;
