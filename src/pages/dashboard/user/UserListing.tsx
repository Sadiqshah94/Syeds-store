// "use client"

// import { useState } from "react"
// import { useGetAllUsersQuery } from "@/store/services/dashboard/user"
// import AppTable from "@/components/ui/core/AppTable"

// const ITEMS_PER_PAGE = 8

// const UserListing = () => {
//   const columns = [
//     { label: "id", className: "w-[80px]" },
//     { label: "avatar", className: "w-[200px]" },
//     { label: "name", className: "w-2" },
//     { label: "email", className: "w-[200px]" },
//     { label: "password", className: "w-[200px]" },
//     { label: "role", className: "w-[200px]" },
//   ]

//   const {data,isLoading,error} =useGetAllUsersQuery();
//   console.log(isLoading ,"Loading")
//   const [currentPage, setCurrentPage] = useState(1)

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page)
//   }

//   const getPaginatedData = () => {
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//     const endIndex = startIndex + ITEMS_PER_PAGE
//     return data?.slice(startIndex, endIndex)
//   }

//   const totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE)

//   return (
//     <div>
//       <AppTable
//         isLoading={isLoading}
//         rows={getPaginatedData()}
//         columns={columns}
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//       {error && <p>Error: {error}</p>}
//     </div>
//   )
// }

// export default UserListing


import Listing from '@/components/ui/core/Listing';
import { useGetAllUsersQuery } from '@/store/services/dashboard/user';

const UserListing = () => {
    const columns = [
    { label: "id", className: "w-[80px]" },
    { label: "avatar", className: "w-[200px]" },
    { label: "name", className: "w-2" },
    { label: "email", className: "w-[200px]" },
    { label: "password", className: "w-[200px]" },
    { label: "role", className: "w-[200px]" },
  ]
  const {data,isLoading,error} =useGetAllUsersQuery();

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

export default UserListing
