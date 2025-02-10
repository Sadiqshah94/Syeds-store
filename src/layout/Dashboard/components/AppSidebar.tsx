import { ChevronDownIcon } from "lucide-react";
import {
  AppImages,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  NavLink,
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
  sidebarItems,
  useLocation,
  useState,
} from "../index";

const AppSidebar = () => {
  const { open } = useSidebar();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<number, boolean>>({});
  const toggleMenu = (index: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
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
                {sidebarItems.map((item, index) => {
                  const isActive = item.children?.some((subItem) =>
                    location.pathname.startsWith(subItem.path)
                  );
                  const isOpen = openMenus[index] || isActive;
                  return item.children ? (
                    <Collapsible key={index} open={isOpen}>
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={`flex items-center justify-between w-full px-4 py-2 rounded ${
                              isActive
                                ? "text-blue-700"
                                : "text-gray-700 hover:bg-gray-200"
                            }`}
                            onClick={() => toggleMenu(index)}
                          >
                            <span className="flex items-center gap-2">
                              {item.icon} {item.name}
                            </span>
                            <ChevronDownIcon
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((subItem, subIndex) => (
                              <SidebarMenuSubItem key={subIndex}>
                                <NavLink
                                  to={subItem.path}
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded ${
                                      isActive
                                        ? "text-blue-700"
                                        : "text-gray-700 hover:bg-gray-200"
                                    }`
                                  }
                                >
                                  <span className="w-4 h-4 text-xl">
                                    {subItem.icon}
                                  </span>
                                  {subItem.name}
                                </NavLink>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 rounded ${
                              isActive
                                ? "bg-blue-500 text-white"
                                : "text-gray-700 hover:bg-gray-200"
                            }`
                          }
                        >
                          {item.icon} {item.name}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
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
