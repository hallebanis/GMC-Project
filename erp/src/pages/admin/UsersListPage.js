import React, { useState } from "react";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../actions/admin/usersActions";
import RoleDropDown from "../../components/admin/RoleDropDown";
import UserList from "../../components/admin/UserList";
import MainNavBar from "../../components/admin/MainNavBar";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import SideNav from "../../components/admin/SideNav";

const UsersListPage = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
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
        <Col md={9} sm={6}>
          <Container fluid>
            <Form>
              <h5>Filter</h5>
              <Form inline>
                <label>Nom :</label>
                <FormControl
                  type="text"
                  name="nameFilter"
                  onChange={(e) => setNameFilter(e.target.value)}
                  value={nameFilter}
                />
                <lable>Role</lable>
                <RoleDropDown
                  setRoleTitle={setRoleFilter}
                  dropDownMsg={
                    roleFilter ? roleFilter : "Select a role from the list"
                  }
                />
                <Button style={{ marginLeft: "25px" }} onClick={handleReset}>
                  Reset
                </Button>
              </Form>
            </Form>
            <Container>
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
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default UsersListPage;
