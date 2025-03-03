import { useFormik } from "formik";
import {
  axios,
  CategoryInitialValues,
  CategoryProps,
  CategoryValidation,
  useAddCategoryMutation,
  useToast,
} from "./index";

interface UseAddCategoryProps {
  setSheetOpen: (open: boolean) => void;
}

const useAddCategory = ({ setSheetOpen }: UseAddCategoryProps) => {
  const { toast } = useToast();
  const [addCategory, { isLoading }] = useAddCategoryMutation();
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
      toast({
        title: "Image upload failed",
      });
      throw error;
    }
  };

  const formik = useFormik<CategoryProps>({
    initialValues: CategoryInitialValues,
    validationSchema: CategoryValidation,
    onSubmit: async (values: any) => {
      try {
        if (values.image && values.image instanceof File) {
          const imageLocation = await uploadImage(values.image);
          values.image = imageLocation;
        }
        await addCategory(values).unwrap();
        setSheetOpen(false);
       
        toast({
          title: "Category Added",
        });

       
      } catch (error: any) {
        toast({
          title: "Failed to Register",
          description: `${error?.status} - ${error?.data?.message}`,
        });
      }
    },
  });

  return { formik, isLoading };
};

export default useAddCategory;
