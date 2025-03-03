export interface CategoryProps {
  name: string;
  image: string | File;
}

export interface ProductProps {
  title: string;
  price: number;
  description: string;
  categoryId:number;
  images: string[] | File[];
}
