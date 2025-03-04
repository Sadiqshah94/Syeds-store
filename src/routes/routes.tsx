import Dashboard from "@/layout/Dashboard";
import {
  ProtectedRoute,
  SignInForm,
  SignupForm,
  NotFound,
  ProductListing,
  UserListing,
  CategoryListing,
} from "./index";

const routes = [
  {
    path: "/",
    element:<SignInForm/>,
  },
  {
    path: "/register",
    element: <SignupForm />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Dashboard/>,
      },
      { path: "products/all", element: <ProductListing /> },
      // { path: "users/add", element: <Users /> },
      { path: "users/all", element: <UserListing /> },
      { path: "categories/all", element: <CategoryListing /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
