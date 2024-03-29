import React from "react";
import { AiFillHome } from "react-icons/ai";
import "react-pro-sidebar/dist/css/styles.css";
import { BsFillPersonFill } from "react-icons/bs";
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
const UserSideNav = () => {
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
            <Link to={"/user-dashboard/" + auth.user._id}>Dashboard</Link>
          </MenuItem>
          <SubMenu title="Demande" icon={<BsFillPersonFill />}>
            <MenuItem>
              <Link to={`/user-dashboard/${auth.user._id}/demande/new`}>
                New Demand
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};
export default UserSideNav;
