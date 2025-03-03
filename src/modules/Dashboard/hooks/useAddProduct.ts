import { useFormik } from "formik";
import {
  axios,
  useToast,
} from "./index";
import { useAddProductMutation } from "@/store/services/dashboard/products";
import { ProductInitialValues } from "./initialValues/initialValues";
import { ProductProps } from "./interfaces/types";
import { ProductValidation } from "./validations/validations";

interface UseAddProductProps {
  setSheetOpen: (open: boolean) => void;
}

const useAddProduct = ({ setSheetOpen }: UseAddProductProps) => {
  const { toast } = useToast();
  const [addProduct, { isLoading }] = useAddProductMutation();

  // Upload Image Function
  const uploadImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/files/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data.location;
    } catch (error) {
      toast({ title: "Image upload failed" });
      throw error;
    }
  };

  // Formik setup
  const formik = useFormik<ProductProps>({
    initialValues: ProductInitialValues,
    validationSchema: ProductValidation,
    onSubmit: async (values: any) => {
      try {
        // Handle product images upload
        if (values.images && Array.isArray(values.images)) {
          const uploadedImages = await Promise.all(
            values.images.map(async (file: File) => {
              if (file instanceof File) {
                return await uploadImage(file);
              }
              return file;
            })
          );
          values.images = uploadedImages;
        }

        if (values.category.image && values.category.image instanceof File) {
          values.category.image = await uploadImage(values.category.image);
        }

        await addProduct(values).unwrap();
        setSheetOpen(false);

        toast({ title: "Product Added" });

      } catch (error: any) {
        toast({
          title: "Failed to Register Product",
          description: `${error?.status} - ${error?.data?.message}`,
        });
      }
    },
  });

  return { formik, isLoading };
};

export default useAddProduct;
