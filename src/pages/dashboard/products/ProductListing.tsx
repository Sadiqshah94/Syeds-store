import AppDrawer from "@/components/ui/core/AppDrawer";
import Listing from "@/components/ui/core/Listing";
import ProductForm from "@/modules/Dashboard/products/ProductForm";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/store/services/dashboard/products";
import { useState } from "react";

const ProductListing = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  const columns = [
    { label: "id", className: "w-[80px]" },
    { label: "Image", className: "w-[200px]" },
    { label: "title", className: "w-[200px]" },
    { label: "Category Name", className: "w-[200px]" },
    { label: "price", className: "w-2" },
  ];
  const [_, setSheetOpen] = useState(false);
  const [deleteProduct, { isLoading: deleteLoading, error: deleteError }] =
    useDeleteProductMutation();

  return (
    <div>
      <div className="flex justify-end">
        <AppDrawer title="Product">
          <ProductForm setSheetOpen={setSheetOpen} />
        </AppDrawer>
      </div>
      <Listing
        columns={columns}
        data={data}
        isLoading={isLoading}
        onDelete={deleteProduct}
        deleteLoading={deleteLoading}
        error={deleteError}
      />
    </div>
  );
};

export default ProductListing;
