import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have ShadCN's Button component
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "@/store/services/dashboard/profile";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const { data, error, isLoading } = useGetProfileQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <h2 className="text-lg font-semibold">Welcome, {data?.name} 👋</h2>
        <Button onClick={handleLogout} variant="destructive">
          Logout
        </Button>
      </header>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </main>
    </div>
  );
};

export default Dashboard;
