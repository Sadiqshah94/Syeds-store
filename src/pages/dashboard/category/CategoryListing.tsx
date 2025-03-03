import AppDrawer from '@/components/ui/core/AppDrawer';
import Listing from '@/components/ui/core/Listing'
import CategoryForm from '@/modules/Dashboard/categories/CategoryForm';
import { useGetAllCategoriesQuery } from '@/store/services/dashboard/categories';
import { useState } from 'react';

const CategoryListing = () => {
  const {data,isLoading,error} =useGetAllCategoriesQuery();
    const columns = [
    { label: "id", className: "w-[80px]" },
    { label: "name", className: "w-[200px]" },
    { label: "image", className: "w-[200px]" },
  ]
  const [_,setSheetOpen] = useState(false);
  return (
    <div>
      <AppDrawer title='Category'>
      <CategoryForm setSheetOpen={setSheetOpen} />
      </AppDrawer>
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
