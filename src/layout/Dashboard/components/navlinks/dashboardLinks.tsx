import {
  LayoutDashboard,
  ShoppingBag,
  List,
  User,
  Users,
  CloudLightning,
} from "lucide-react";

export const sidebarItems = [
  { name: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, path: "/dashboard" },
  {
    name: "Products",
    icon: <ShoppingBag className="w-4 h-4" />,
    children: [
      // { name: "Add Product", icon: <Plus className="w-4 h-4" />, path: "/dashboard/products/add" },
      { name: "All Products", icon: <List className="w-4 h-4" />, path: "/dashboard/products/all" },
    ],
  },
  {
    name: "Users",
    icon: <User className="w-4 h-4" />,
    children: [
      // { name: "Add User", icon: <UserPlus className="w-4 h-4" />, path: "/dashboard/users/add" },
      { name: "All Users", icon: <Users className="w-4 h-4" />, path: "/dashboard/users/all" },
    ],
  },
  {
    name: "Categories",
    icon: <CloudLightning className="w-4 h-4" />,
    children: [
      // { name: "Add Category", icon: <Plus className="w-4 h-4" />, path: "/dashboard/categories/add" },
      { name: "All Categories", icon: <List className="w-4 h-4" />, path: "/dashboard/categories/all" },
    ],
  },
];
