import { Navigate } from "react-router-dom";

const SuperadminRoute = ({ children }) => {
  const token = sessionStorage.getItem("adminToken");
  const role = sessionStorage.getItem("adminRole");
  if (!token || role !== "superadmin")
    return <Navigate to="/admin/login" replace />;
  return children;
};

export default SuperadminRoute;
