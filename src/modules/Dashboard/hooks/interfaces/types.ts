export interface CategoryProps {
  name: string;
  image: string | File;
}

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number | null;
    name: string;
    image: string | File;
  };
  images: string[] | File[];
}
