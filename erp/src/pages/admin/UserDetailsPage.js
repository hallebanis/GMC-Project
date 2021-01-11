import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import User from "../../components/admin/User";

const UserDetailsPage = ({ match, history }) => {
  const users = useSelector((state) => state.users);
  const [changeMaid, setChangeMaid] = useState("false");
  const user = users.users.filter((elm) => elm._id === match.params.id);
  useEffect(() => {
    if (changeMaid === true) history.push("/admin-dashboard/users");
  }, [changeMaid]);
  return (
    <div>
      <h1>user</h1>
      <h2>{}</h2>
      <User user={user[0]} changeMaid={setChangeMaid} />
    </div>
  );
};

export default UserDetailsPage;
