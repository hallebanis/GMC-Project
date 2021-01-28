import React from "react";
import { AiFillHome } from "react-icons/ai";
import "react-pro-sidebar/dist/css/styles.css";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { FcVoicePresentation } from "react-icons/fc";
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
export const NavSide = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <ProSidebar style={{ backgroundColor: "#343A40" }}>
      <SidebarHeader
        style={{
          padding: "10px",
          fontSize: "30px",
        }}
      >
        {`${auth.user.personnelId.nom} ${auth.user.personnelId.prenom}: ${auth.user.role.titre}`}
      </SidebarHeader>
      <SidebarHeader style={{ padding: "10px", fontSize: "1.5em" }}>
        Enterprise resource planning
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<AiFillHome />}>
            <Link to="/">Dashboard</Link>
          </MenuItem>
          <SubMenu title="Personnel" icon={<BsFillPersonFill />}>
            <MenuItem>
              <Link to="/grh-dashboard/addpersonnel">Add Personnel</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/grh-dashboard/listpersonnel">Personnel List</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title="Contrat" icon={<BiNotepad />}>
            <MenuItem>
              <Link to="/grh-dashboard/contrat">Add Contrat</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title="Service" icon={<BsFillBagFill />}>
            <MenuItem>
              <Link to="/grh-dashboard/AddService">Add Service</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/grh-dashboard/ListService">List Service</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title="Avance" icon={<MdAttachMoney />}>
            <MenuItem>
              <Link to="/grh-dashboard/AddAvance">Add Avance</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title="Pointage" icon={<FcVoicePresentation />}>
            <MenuItem>
              <Link to="/grh-dashboard/pointage">Add Pointage</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};
