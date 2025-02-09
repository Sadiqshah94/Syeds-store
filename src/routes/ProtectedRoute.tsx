
import {Navigate, Outlet, RootState, useSelector} from './index';


const ProtectedRoute = () => {
    const isAuthenticated = useSelector(
      (state: RootState) => state?.auth?.user
    );
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
  };
  
  export default ProtectedRoute;