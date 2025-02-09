import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/features/auth/signInReducer";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear(); 
    dispatch(logout()); 
    navigate("/"); 
  };
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <div className="bg-gray-500 h-16">
            <SidebarTrigger />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >Logout</button>
          </div>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
