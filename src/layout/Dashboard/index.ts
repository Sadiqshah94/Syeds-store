import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/features/auth/signInReducer";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { AppImages } from "@/constants/AppImages";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  Badge,
  CatIcon,
  Home,
  PlusIcon,
  ListIcon,
  UsersIcon,
  UserPlusIcon,
  LayoutDashboardIcon,
  LucideCloudLightning,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { sidebarItems } from "./components/navlinks/dashboardLinks";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export {
  useState,
  useLocation,
  PlusIcon,
  ListIcon,
  UsersIcon,
  UserPlusIcon,
  sidebarItems,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sidebar,
  NavLink,
  Badge,
  AppImages,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  CatIcon,
  Home,
  LayoutDashboardIcon,
  LucideCloudLightning,
  ShoppingBagIcon,
  UserIcon,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
  SidebarProvider,
  SidebarTrigger,
  Outlet,
  useNavigate,
  useDispatch,
  logout,
  AppSidebar,
  Avatar, AvatarFallback, AvatarImage,
};
