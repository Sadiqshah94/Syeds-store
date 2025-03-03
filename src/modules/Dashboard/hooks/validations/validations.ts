import * as Yup from "yup";


export const CategoryValidation = Yup.object({
  name: Yup.string().required("Category name is required"),
  image: Yup.string().required("Image is required"),
});



export const ProductValidation = Yup.object({
  title: Yup.string().required("Product title is required"),
  price: Yup.number()
    .positive("Price must be greater than 0")
    .required("Price is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.object().shape({
    id: Yup.number().required("Category selection is required"),
    name: Yup.string().required("Category name is required"),
    image: Yup.string().required("Category image is required"),
  }),
  images: Yup.array()
    .of(Yup.mixed().required("Image is required"))
    .min(1, "At least one product image is required"),
});

