import Dashboard from "@/layout/Dashboard";
import { SignupForm, SignInForm } from "./index";

export const routes = [
  {
    path: "/",
    component: <SignInForm />,
  },
  {
    path: "/register",
    component: <SignupForm />,
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
];
