import axios from "axios";
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
  console.log(data)
  const uploadImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("https://api.escuelajs.co/api/v1/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.location;
    } catch (error) {
      toast({
        title: "Image upload failed",
      });
      throw error;
    }
  };


  const CreateUser = useFormik<SignupProps>({
    initialValues: SignUpInitialValues,
    validationSchema: SignupValidation,
    onSubmit: async (values) => {
      console.log(values)
      try {
        if (values.avatar && values.avatar instanceof File) {
          const imageLocation = await uploadImage(values.avatar);
          values.avatar = imageLocation;
        }
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
