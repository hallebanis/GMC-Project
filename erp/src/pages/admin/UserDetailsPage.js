import React from "react";
import { useSelector } from "react-redux";
import User from "../../components/admin/User";

const UserDetailsPage = ({ match }) => {
  const users = useSelector((state) => state.users);
  const user = users.users.filter((elm) => elm._id === match.params.id);
  return (
    <div>
      <h1>user</h1>
      <h2>{}</h2>
      <User user={user[0]} />
    </div>
  );
};

export default UserDetailsPage;
