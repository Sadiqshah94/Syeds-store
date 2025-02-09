import { RootState, Route, Routes, routes, useSelector } from "./index.ts";

export default function App() {
  const isAuthenticated = useSelector((state: RootState) => state?.auth?.user);
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            typeof route.element === "function"
              ? route.element(isAuthenticated)
              : route.element
          }
        >
          {route.children?.map((child, childIndex) => (
            <Route key={childIndex} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
