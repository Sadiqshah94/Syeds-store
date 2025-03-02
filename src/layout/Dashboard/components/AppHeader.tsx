import { Fragment } from "react/jsx-runtime";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  capitalizeFirstLetter,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  logout,
  ProfileSkeleton,
  SidebarTrigger,
  useDispatch,
  useGetProfileQuery,
  useNavigate,
  useToast,
} from "../index";

const AppHeader = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProfileQuery();
  console.log(data);
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
        {isLoading ? (
          <ProfileSkeleton />
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={data?.avatar} />
                  <AvatarFallback>
                    {data?.name.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-md font-semibold">
                    {capitalizeFirstLetter(data?.name)}
                  </p>
                  <p className="text-sm">{capitalizeFirstLetter(data?.role)}</p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </Fragment>
  );
};

export default AppHeader;
