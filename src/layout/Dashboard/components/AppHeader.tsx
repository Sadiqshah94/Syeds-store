import { Fragment } from "react/jsx-runtime";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  // logout,
  SidebarTrigger,
  useDispatch,
  // useDispatch,
  useNavigate,
} from "../index";
import { logout } from "@/store/features/authSlice";
import { useToast } from "@/hooks/use-toast";

const AppHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast({
      title: "User Sign Out",
      description: "Successfully logged out!",
    });
  };
  return (
    <Fragment>
      <div className="bg-gray-200 px-4 py-2 items-center mx-4 my-3 rounded-md flex justify-between">
        <div>
        <SidebarTrigger />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Fragment>
  );
};

export default AppHeader;
