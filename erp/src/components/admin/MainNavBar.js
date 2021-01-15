import React from "react";
import { Button, Form, FormControl, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MainNavBar({ bg, variant }) {
  const auth = useSelector((state) => state.auth);
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
    <Navbar bg={bg || "dark"} variant={variant || "dark"}>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={switchDashboard}>Dashboard</Link>
        </Nav.Link>
      </Nav>
      <Form inline>
        <Nav.Link>LOGIN</Nav.Link>
      </Form>
    </Navbar>
  );
}

export default MainNavBar;
