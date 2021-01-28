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
const SideNav = () => {
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
          `${auth.user.personnelId.nom} ${auth.user.personnelId.prenom} : ${auth.user.role.titre}`}
      </SidebarHeader>
      <SidebarHeader style={{ padding: "10px", fontSize: "1.5em" }}>
        Enterprise resource planning
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<AiFillHome />}>
            <Link to="/admin-dashboard">Dashboard</Link>
          </MenuItem>
          <SubMenu title="Users" icon={<BsFillPersonFill />}>
            <MenuItem>
              <Link to="/admin-dashboard/users">User List</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/admin-dashboard/adduser">New User</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title="Role" icon={<BsFillPersonFill />}>
            <MenuItem>
              <Link to="/admin-dashboard/roles">Role List</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};
export default SideNav;
