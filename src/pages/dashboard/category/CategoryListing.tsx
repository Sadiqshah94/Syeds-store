import AppDrawer from '@/components/ui/core/AppDrawer';
import Listing from '@/components/ui/core/Listing'
import CategoryForm from '@/modules/Dashboard/categories/CategoryForm';
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '@/store/services/dashboard/categories';
import { useState } from 'react';

const CategoryListing = () => {
  const {data,isLoading} =useGetAllCategoriesQuery();
    const columns = [
      { label: "id", className: "w-[80px]" },
      { label: "image", className: "w-[200px]" },
    { label: "name", className: "w-[200px]" },
  ]
  const [deleteCategory, { isLoading: deleteLoading, error: deleteError }] = useDeleteCategoryMutation();
  const [_,setSheetOpen] = useState(false);
  return (
    <div>
      <div className='flex justify-end'>
      <AppDrawer title='Category'>
      <CategoryForm setSheetOpen={setSheetOpen} />
      </AppDrawer>
      </div>
      <Listing
      columns={columns}
      data={data}
      isLoading={isLoading}
      onDelete={deleteCategory}
      deleteLoading={deleteLoading}
      error={deleteError}
      />
    </div>
  )
}

export default CategoryListing
