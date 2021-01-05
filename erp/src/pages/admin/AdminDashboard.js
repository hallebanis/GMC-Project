import React from "react";
import { Link } from "react-router-dom";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";

const AdminDashboard = () => {
  return (
    <div>
      <AdminDashboardSidebar />
      <Link to="/admin-dashboard/users">User List</Link>
    </div>
  );
};

export default AdminDashboard;
