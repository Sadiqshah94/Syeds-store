import { useFormik } from "formik";
import {
  SigninInitialValues,
  SigninProps,
  SignInValidations,
  useToast,
} from "./index";
import { useDispatch } from "react-redux";
import { signInUser } from "@/store/features/auth/signInReducer";

const useUserSignIn = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const SignInUser = useFormik<SigninProps>({
    initialValues: SigninInitialValues,
    validationSchema: SignInValidations,
    onSubmit: async(values) => {
      try {
        await dispatch(signInUser(values));
        toast({
          title: "User Sign In",
          description: "Successfully logged in!",
        });
      } catch (error: any) {
        toast({
          title: "Failed to Login",
          description: "Login failed. Please try again.",
        });
      }
    },
  });

  return { SignInUser };
};

export default useUserSignIn;
