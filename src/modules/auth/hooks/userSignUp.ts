import {
  SignUpInitialValues,
  SignupProps,
  SignupValidation,
  useCreateUserMutation,
  useFormik,
  useToast,
} from "./index";

const useSignUp = () => {
  const { toast } = useToast();
  const [registerUser, { isLoading, error, data }] = useCreateUserMutation();

  const CreateUser = useFormik<SignupProps>({
    initialValues: SignUpInitialValues,
    validationSchema: SignupValidation,
    onSubmit: async (values) => {
      try {
        await registerUser(values).unwrap();
        toast({
          title: "User Registered Successfully",
        });
      } catch (error: any) {
        toast({
          title: "Failed to Register",
          description: `${error?.status} - ${error?.data?.message}`,
        });
      }
    },
  });

  return { CreateUser, isLoading, error, data };
};

export default useSignUp;
