import ProductForm from "@/modules/Dashboard/products/ProductForm";

const Products = ({
  setSheetOpen,
}: {
  setSheetOpen: (open: boolean) => any;
}) => {
  return (
    <div>
      <ProductForm setSheetOpen={setSheetOpen} />
    </div>
  );
};

export default Products;
