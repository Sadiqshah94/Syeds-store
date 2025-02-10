import AppHeader from "./components/AppHeader";
import { AppSidebar, Outlet, SidebarProvider } from "./index";

const Dashboard = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppHeader />
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
