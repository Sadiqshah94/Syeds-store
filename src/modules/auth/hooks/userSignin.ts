import { useFormik } from "formik";
import {
  SigninInitialValues,
  SigninProps,
  SignInValidations,
  useToast,
} from "./index";
import { signInUser } from "@/store/features/auth/signInReducer";
import { useAppDispatch } from "@/store/store";

const useUserSignIn = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const SignInUser = useFormik<SigninProps>({
    initialValues: SigninInitialValues,
    validationSchema: SignInValidations,
    onSubmit: async (values: any) => {
      try {
        await dispatch(signInUser(values)).unwrap();
        toast({
          title: "User Sign In",
          description: "Successfully logged in!",
        });
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
