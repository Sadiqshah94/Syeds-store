import * as Yup from "yup";


export const CategoryValidation = Yup.object({
  name: Yup.string().required("Category name is required"),
  image: Yup.string().required("Image is required"),
});
