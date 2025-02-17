import { useFormik } from "formik";
import {
  SigninInitialValues,
  SigninProps,
  SignInValidations,
  useToast,
} from "./index";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/store/features/authSlice";
import { postReq } from "@/api/request";
const useUserSignIn = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const SignInUser = useFormik<SigninProps>({
    initialValues: SigninInitialValues,
    validationSchema: SignInValidations,
    onSubmit: async (values: any) => {
      dispatch(setLoading(true));
      try {
        const response = await postReq("/auth/login", values);
        if (response) {
          await dispatch(setUser(values));
          toast({
            title: "User Sign In",
            description: "Successfully logged in!",
          });
        }
      } catch (error: any) {
        toast({
          title: "Failed to Login",
          description: error || "Login failed. Please try again.",
        });
      }
    },
  });
  return { SignInUser };
};

export default useUserSignIn;
