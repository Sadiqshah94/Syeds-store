import {
  ProtectedRoute,
  Navigate,
  Dashboard,
  Products,
  User,
  SignInForm,
  SignupForm,
  NotFound,
} from "./index";

const routes = [
  {
    path: "/",
    element: (isAuthenticated: any) =>
      isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignInForm />,
  },
  {
    path: "/register",
    element: (isAuthenticated: any) =>
      isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignupForm />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <User /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
