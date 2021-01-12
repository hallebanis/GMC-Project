import React, { useEffect } from "react";
import { loadRoles } from "../../actions/admin/usersActions";
import RoleList from "../../components/admin/RoleList";
import { useDispatch, useSelector } from "react-redux";

const RolePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRoles());
  }, []);
  const users = useSelector((state) => state.users);
  return (
    <div>
      <RoleList roleList={users.roles} />
    </div>
  );
};

export default RolePage;
