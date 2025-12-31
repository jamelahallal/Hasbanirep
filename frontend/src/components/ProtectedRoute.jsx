import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = sessionStorage.getItem("adminToken");
  const role = (sessionStorage.getItem("adminRole") || "").toLowerCase();

  if (!token) return <Navigate to="/admin/login" replace />;
  if (allowedRoles && !allowedRoles.includes(role))
    return <Navigate to="/admin/login" replace />;

  return children;
};

export default ProtectedRoute;
