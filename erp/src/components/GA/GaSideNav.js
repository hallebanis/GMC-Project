import React from "react";
import { AiFillHome } from "react-icons/ai";
import "react-pro-sidebar/dist/css/styles.css";
import { FaSellcast } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useSelector } from "react-redux";
const GaSideNav = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <ProSidebar style={{ backgroundColor: "#343A40" }}>
      <SidebarHeader
        style={{
          padding: "10px",
          fontSize: "30px",
        }}
      >
        {auth.isAuth &&
          `${auth.user.personnelId.nom} ${auth.user.personnelId.prenom}`}
      </SidebarHeader>
      <SidebarHeader style={{ padding: "10px", fontSize: "1.5em" }}>
        Enterprise resource planning
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<AiFillHome />}>
            <Link to={"/ga-dashboard/"}>Dashboard</Link>
          </MenuItem>
          <SubMenu title="Produit" icon={<FaSellcast />}>
            <MenuItem>
              <Link to={`/ga-dashboard/produits`}>Product List</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Categorie" icon={<FaSellcast />}>
            <MenuItem>
              <Link to={`/ga-dashboard/categorie`}>Category List</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Fournisseurs" icon={<FaSellcast />}>
            <MenuItem>
              <Link to={`/ga-dashboard/addFournisseur`}>
                nouveau Fournisseur
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/ga-dashboard/fournisseur`}>
                Liste des Fournisseurs
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};
export default GaSideNav;
