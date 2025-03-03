import { CategoryProps } from "../interfaces/types";
import { v4 as uuidv4 } from "uuid";



export const CategoryInitialValues: CategoryProps = {
  name: "",
  image: "",
};


import { ProductProps } from "../interfaces/types";

export const ProductInitialValues: ProductProps = {
  title:"",
  description:"",
  price:0,
  categoryId:0,
  images: [],
};

