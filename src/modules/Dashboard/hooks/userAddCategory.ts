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

  const uploadImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.location;
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
