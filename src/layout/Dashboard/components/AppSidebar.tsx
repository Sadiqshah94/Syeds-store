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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import {
  Badge,
  CatIcon,
  Home,
  LayoutDashboardIcon,
  LucideCloudLightning,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AppSidebar = () => {
 
  const { open } = useSidebar();

  return (
    <div>
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <SidebarHeader className="flex-row items-center  bg-gray-200 flex justify-center w-100">
          <img
            src={AppImages.logo}
            className={`${!open ? "w-8 h-8" : "w-10 h-10"} contain`}
          />
          {open && <h2 className="text-lg font-semibold">Syed's Store</h2>}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
              <SidebarMenuItem>
              <SidebarMenuButton>
                      <LayoutDashboardIcon/> Dashboard
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <ShoppingBagIcon/> Products
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>Add Product</SidebarMenuSubItem>
                      <SidebarMenuSubItem>All Products</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <UserIcon/> Users
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                    <SidebarMenuSubItem>Add Users</SidebarMenuSubItem>
                    <SidebarMenuSubItem>All Users</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <LucideCloudLightning/> Categories
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                    <SidebarMenuSubItem>Add Users</SidebarMenuSubItem>
                    <SidebarMenuSubItem>All Users</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              </SidebarMenu>
             
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        {open && (
          <SidebarFooter>
            <p className="text-xs text-gray-400">
              © 2023 Syed's Store. All rights reserved.
            </p>
          </SidebarFooter>
        )}
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
