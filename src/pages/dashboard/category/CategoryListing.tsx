import Listing from '@/components/ui/core/Listing'
import { useGetAllCategoriesQuery } from '@/store/services/dashboard/categories';

const CategoryListing = () => {
  const {data,isLoading,error} =useGetAllCategoriesQuery();
    const columns = [
    { label: "id", className: "w-[80px]" },
    { label: "name", className: "w-[200px]" },
    { label: "image", className: "w-[200px]" },
  ]

  return (
    <div>
      <Listing
      columns={columns}
      data={data}
      isLoading={isLoading}
      error={error}
      />
    </div>
  )
}

export default CategoryListing
