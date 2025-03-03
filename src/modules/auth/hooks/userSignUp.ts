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
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET
      const cloud_name = import.meta.env.VITE_CLOUD_NAME
      const uploadImage = async (file: File) => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", upload_preset);
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, 
          formData
        );
          return response.data.secure_url;
        } catch (error) {
          toast({ title: "Image upload failed" });
          throw error;
        }
      };


  const CreateUser = useFormik<SignupProps>({
    initialValues: SignUpInitialValues,
    validationSchema: SignupValidation,
    onSubmit: async (values) => {
    
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
