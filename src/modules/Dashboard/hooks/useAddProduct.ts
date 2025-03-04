import { useFormik } from "formik";
import { axios, useToast } from "./index";
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
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
  const cloud_name = import.meta.env.VITE_CLOUD_NAME;

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

  const formik = useFormik<ProductProps>({
    initialValues: ProductInitialValues,
    validationSchema: ProductValidation,
    onSubmit: async (values) => {
      try {
        console.log(values.categoryId);

        const productData: any = {
          ...values,
          categoryId: Number(values.categoryId || 60),
          price: Number(values.price),
        };

        if (values.images && Array.isArray(values.images)) {
          productData.images = await Promise.all(
            values.images.map(async (file: any) => {
              return file instanceof File ? await uploadImage(file) : file;
            })
          );
        }

        await addProduct(productData).unwrap();
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
