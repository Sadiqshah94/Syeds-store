import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, routes, Toaster } from "./index.ts";

export default function App() {
  const { isAuthenticated } = useSelector((state:RootState) => state?.auth);

  const renderRoute = (route: any, index: number) => {
    if (route.path === "/") {
      return (
        <Route
          key={index}
          path={route.path}
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : route.element}
        />
      );
    }
    if(route.path === "*"){
      return (
        <Route
          key={index}
          path={route.path}
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : route.element}
        />
      );
    }
    return (
      <Route key={index} path={route.path} element={route.element}>
        {route.children?.map((child: any, childIndex: number) => (
          <Route key={childIndex} path={child.path} element={child.element} />
        ))}
      </Route>
    );
  };

  return (
    <>
      <Routes>
        {routes.map((route, index) => renderRoute(route, index))}
      </Routes>
      <Toaster />
    </>
  );
}
