import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <p>This is {auth.user ? "connected" : "user"} Dashboard</p>
    </div>
  );
};

export default UserDashboard;
