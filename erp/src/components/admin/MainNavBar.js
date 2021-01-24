import React from "react";
import { Button, Form, FormControl, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authentification/authActions";

function MainNavBar({ bg, variant,color }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const switchDashboard = () => {
    switch (auth.user.role.titre) {
      case "admin":
        return "/admin-dashboard";
      case "GRH":
        return "/grh-dashboard";
      case "resAchat":
        return "/ga-dashboard";
      case "resVente":
        return "/gv-dashboard";
      default:
        return `/user-dashboard/${auth.user._id}`;
    }
  };
  return (



    <Navbar
      style={{ height: "10vh", backgroundColor:color || "#1D1D1D" }}
      
    >
      <Navbar.Brand style={{ fontWeight: "bold", color: "white" }} href="#home">

        ERP
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          {auth.isAuth && (
            <Link style={{ color: "white" }} to={switchDashboard}>
              Dashboard
            </Link>
          )}
        </Nav.Link>
      </Nav>
      <Form inline>
        {auth.isAuth ? (
          <Nav.Link onClick={handleLogout} style={{ color: "white" }}>
            LOGOUT
          </Nav.Link>
        ) : (
          <Nav.Link>
            <Link style={{ color: "white" }} to="/login">
              LOGIN
            </Link>
          </Nav.Link>
        )}
      </Form>
    </Navbar>
  );
}

export default MainNavBar;
