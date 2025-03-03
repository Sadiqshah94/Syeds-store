// import { Package, Users, ShoppingCart, Hourglass, Key } from "lucide-react";

import { Package, ShoppingCart, Users } from "lucide-react";


// // type StatisticsKey = "products" | "categories" | "users" | "orders";

// interface StatisticsItem {
//   id:number;
//   key: string;
//   icon: React.ReactNode;
//   description: string;
//   title: string;
// }


// const StatisticsData:StatisticsItem[] = [
//   {
//     id: 1,
//     title: "Total Products",
//     description: "Number of products available in inventory",
//     icon: <Package size={24} />,
//     key:'products'
//   },
//   {
//     id: 2,
//     title: "Total Users",
//     description: "Total registered users on the platform",
//     icon: <Users size={24} />,
//     key:"users",
//   },
//   {
//     id: 3,
//     title: "Active Orders",
//     description: "Orders currently being processed",
//     icon: <ShoppingCart size={24} />,
//     key:"orders"
//   },
//   {
//     id: 4,
//     title: "Total Categories",
//     description: "Requests waiting for approval",
//     icon: <Hourglass size={24} />,
//     key:"categories"
//   },
// ];

type StatisticsKey = "products" | "categories" | "users" | "profit";

interface StatisticsItem {
  key: StatisticsKey;
  icon: React.ReactNode;
  description: string;
  title: string;
}

const StatisticsData: StatisticsItem[] = [
  { key: "products", icon: <Package size={60} style={{color:"gray", opacity:"0.2",}} />, description: "Total Products", title: "Products" },
  { key: "categories", icon: <Users size={60} style={{color:"gray", opacity:"0.2",}} />, description: "Total Categories", title: "Categories" },
  { key: "users",  icon: <ShoppingCart size={60} style={{color:"gray", opacity:"0.2",}} />, description: "Total Users", title: "Users" },
  {key:"profit", icon: <Users size={60} style={{color:"gray", opacity:"0.2",}} />, description:"Totalprofit", title: "Profits"},

];
// icon: <Hourglass size={24} />,

export default StatisticsData;

