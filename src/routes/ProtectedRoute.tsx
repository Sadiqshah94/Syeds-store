import { Navigate } from "react-router-dom";
import { Dashboard, RootState, useSelector } from "./index";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => state?.auth?.user);

  return isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
