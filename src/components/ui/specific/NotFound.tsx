import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-2/5">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-lg text-gray-600 mb-6">Page Not Found</p>
        <Button onClick={() => navigate("/")} className="mt-4">
          Go Home
        </Button>
      </div>
    </div>
  );
}