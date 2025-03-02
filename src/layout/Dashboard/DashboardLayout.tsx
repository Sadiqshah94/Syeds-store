import useNetworkStatus from "@/hooks/useNetworkStatus";
import AppHeader from "./components/AppHeader";
import { AppSidebar, Outlet, SidebarProvider } from "./index";

const DashboardLayout = () => {
  const isOnline = useNetworkStatus();
  console.log(isOnline);
  return (
    <div>
      {!isOnline ? <>
      
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-xl shadow-md">
          <h1 className="text-xl font-semibold text-red-500">No Connection Found</h1>
          <p className="text-gray-600">Please check your internet connection.</p>
        </div>
      </div>
      </> :
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppHeader />
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>}
    </div>
  );
};

export default DashboardLayout;
