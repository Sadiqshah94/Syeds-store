import {
  LayoutDashboardIcon,
  ShoppingBagIcon,
  PlusIcon,
  ListIcon,
  UserIcon,
  UsersIcon,
  UserPlusIcon,
  LucideCloudLightning,
} from "@/layout/Dashboard/index";

const Icon = (Component: any) => <Component className="w-4 h-4" />;

export const sidebarItems = [
  { name: "Dashboard", icon: Icon(LayoutDashboardIcon), path: "/dashboard" },
  {
    name: "Products",
    icon: Icon(ShoppingBagIcon),
    children: [
      { name: "Add Product", icon: Icon(PlusIcon), path: "/dashboard/products/add" },
      { name: "All Products", icon: Icon(ListIcon), path: "/dashboard/products/all" },
    ],
  },
  {
    name: "Users",
    icon: Icon(UserIcon),
    children: [
      { name: "Add User", icon: Icon(UserPlusIcon), path: "/dashboard/users/add" },
      { name: "All Users", icon: Icon(UsersIcon), path: "/dashboard/users/all" },
    ],
  },
  {
    name: "Categories",
    icon: Icon(LucideCloudLightning),
    children: [
      { name: "Add Category", icon: Icon(PlusIcon), path: "/dashboard/categories/add" },
      { name: "All Categories", icon: Icon(ListIcon), path: "/dashboard/categories/all" },
    ],
  },
];
