import Listing from "@/components/ui/core/Listing";
import { useGetAllProductsQuery } from "@/store/services/dashboard/products";

const ProductListing = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();

  const columns = [
    { label: "id", className: "w-[80px]" },
    { label: "Image", className: "w-[200px]" },
    { label: "title", className: "w-[200px]" },
    { label: "Category Name", className: "w-[200px]" },
    { label: "price", className: "w-2" },
  ];

  return (
    <div>
      <Listing
        columns={columns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default ProductListing;
