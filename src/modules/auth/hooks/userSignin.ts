import { useFormik } from "formik";
import {
  SigninInitialValues,
  SigninProps,
  SignInValidations,
  useToast,
} from "./index";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/store/features/auth/authSlice";
import { postReq } from "@/api/request";
import { ResponseProps } from "./interfaces/types";

const useUserSignIn = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const SignInUser = useFormik<SigninProps>({
    initialValues: SigninInitialValues,
    validationSchema: SignInValidations,
    onSubmit: async (values: any) => {
      dispatch(setLoading(true));
      try {
        const response:ResponseProps = await postReq("/auth/login", values);
        localStorage.setItem("access_token", response.data?.access_token);
        if (response) {
          await dispatch(setUser(response.data)); 
          toast({
            title: "User Sign In",
            description: "Successfully logged in!",
          });
        }
      } catch (error: any) {
        console.log(error);
        toast({
          title: "Failed to Login",
          description: `${error?.response?.status} - ${error.response?.data?.message}` ||  "Login failed. Please try again"
        });
      } finally {
        dispatch(setLoading(false)); 
      }
    },
  });

  return { SignInUser };
};

export default useUserSignIn;
