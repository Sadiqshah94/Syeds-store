import { CategoryProps } from "../interfaces/types";
import { v4 as uuidv4 } from "uuid";



export const CategoryInitialValues: CategoryProps = {
  name: "",
  image: "",
};


import { ProductProps } from "../interfaces/types";

export const ProductInitialValues: ProductProps = {
  id: Number(uuidv4()), 
  title: "",
  price: 0,
  description: "",
  category: {
    id: null,
    name: "",
    image: "",
  },
  images: [],
};

