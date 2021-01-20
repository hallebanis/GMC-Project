import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const GvSidebar = () => {
  return (
    <Nav defaultActiveKey="/home" style ={{height:"100vh"}} className="flex-column">
      <Nav.Link>
        <Link to="/gv-dashboard">Home</Link>
      </Nav.Link>
      <Nav.Link eventKey="link-1">
        <Link to="/gv-dashboard/addclient">Add Client</Link>
      </Nav.Link>
      <Nav.Link eventKey="link-2"><Link to="/gv-dashboard/listeClients">Liste des Clients</Link></Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
};

export default GvSidebar;
