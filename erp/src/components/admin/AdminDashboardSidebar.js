import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const AdminDashboardSidebar = ({ color, linkList }) => {
  return (
    <Nav
      style={{ backgroundColor: color || "rgb(52,58,64)" }}
      defaultActiveKey="/home"
      className="flex-column navSideBar"
    >
      {linkList &&
        linkList.map((elm, i) => (
          <>
            <Nav.Item className="navTitle" id={i}>
              {elm.categorie}
            </Nav.Item>
            {elm.elements.map((sElm, j) => (
              <Nav.Item>
                <Nav.Link eventKey={`link-${j}`} id={`se${j}`}>
                  <Link to={sElm.link}>{sElm.title}</Link>
                </Nav.Link>
              </Nav.Item>
            ))}
          </>
        ))}
    </Nav>
  );
};

export default AdminDashboardSidebar;
