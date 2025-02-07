import {
  SigninInitialValues,
  SigninProps,
  SignInValidations,
  useFormik,
  useLoginUserMutation,
  useToast,
} from "./index";

const userSignIn = () => {
  const { toast } = useToast();
  const [LoginUser, { data, isLoading, error }] = useLoginUserMutation();

  const SignInUser = useFormik<SigninProps>({
    initialValues: SigninInitialValues,
    validationSchema: SignInValidations,
    onSubmit: async (values) => {
      try {
        const response = await LoginUser(values).unwrap();
        localStorage.setItem("access_token", response?.access_token);
        toast({
          title: "User Sign In",
          description: "Successfully logged in!",
        });
      } catch (error: any) {
        toast({
          title: "Failed to Login",
          description: `${error?.status} - ${error?.data?.message}`,
        });
      }
    },
  });

  return { SignInUser, isLoading, data, error };
};

export default userSignIn;
