import React, { useState } from "react";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../actions/admin/usersActions";
import RoleDropDown from "../../components/admin/RoleDropDown";
import UserList from "../../components/admin/UserList";
import MainNavBar from "../../components/admin/MainNavBar";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";

const UsersListPage = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const users = useSelector((state) => state.users);
  const [nameFilter, setNameFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const handleReset = (e) => {
    setRoleFilter("");
    setNameFilter("");
  };
  return (
    <div>
      {console.log(users)}
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
          <Col md="auto"></Col>
        </Row>
      </Container>
      <Form>
        <h3>Filter</h3>
        <label>Nom :</label>
        <input
          type="text"
          name="nameFilter"
          onChange={(e) => setNameFilter(e.target.value)}
          value={nameFilter}
        />
        <lable>Role</lable>
        <RoleDropDown
          setRoleTitle={setRoleFilter}
          dropDownMsg={roleFilter ? roleFilter : "Select a role from the list"}
        />
      </Form>
      <Button onClick={handleReset}>Reset</Button>
      <UserList
        history={history}
        userList={
          users
            ? users.users.filter((elm) =>
                elm.personnelId.nom
                  ? (elm.personnelId.nom
                      .toLowerCase()
                      .includes(nameFilter.toLowerCase()) ||
                      elm.personnelId.prenom
                        .toLowerCase()
                        .includes(nameFilter.toLowerCase())) &&
                    (roleFilter === "Select a role from the list"
                      ? true
                      : elm.role.titre.includes(roleFilter))
                  : null
              )
            : null
        }
      />
    </div>
  );
};

export default UsersListPage;
