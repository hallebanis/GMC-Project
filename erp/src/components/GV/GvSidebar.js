import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiNotepad } from "react-icons/bi";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { useSelector } from "react-redux";

const GvSidebar = () => {
  const auth = useSelector((state) => state.auth);

  return (

    <ProSidebar style={{ backgroundColor: "#343A40" }}>
      <SidebarHeader
        style={{
          padding: "10px",
          fontSize: "30px",
        }}
      >
        {`${auth.user.personnelId.nom} ${auth.user.personnelId.prenom}`}
      </SidebarHeader>
      <SidebarHeader style={{ padding: "10px", fontSize: "1.5em" }}>
        Enterprise Ressource Planning
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<AiFillHome />}>
            <Link to="/gv-dashboard">Home</Link>
          </MenuItem>
          <SubMenu title="Client" icon={<BsFillPersonFill />}>
            <MenuItem>
              <Link to="/gv-dashboard/addclient">Add Client</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/gv-dashboard/listeClients">Liste des Clients</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title="Commandes" icon={<BiNotepad />}>
            <MenuItem>
              <Link to="/gv-dashboard/Commande">Liste des Commandes</Link>
            </MenuItem>
          </SubMenu>
        </Menu>

      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};

export default GvSidebar;
