import {
  ProtectedRoute,
  SignInForm,
  SignupForm,
  NotFound,
  Products,
  ProductListing,
  Users,
  UserListing,
  Categories,
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
        element: "Welcome to dashboard",
      },
      { path: "products/add", element: <Products /> },
      { path: "products/all", element: <ProductListing /> },
      { path: "users/add", element: <Users /> },
      { path: "users/all", element: <UserListing /> },
      { path: "categories/add", element: <Categories /> },
      { path: "categories/all", element: <CategoryListing /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
