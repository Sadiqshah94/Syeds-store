"use client"

import { useState } from "react"
import AppTable from "@/components/ui/core/AppTable"
const ITEMS_PER_PAGE = 8

const Listing = ({isLoading,data,columns,onDelete,error,deleteLoading}:any) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return data?.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE)




  return (
    <div>
      <AppTable
        isLoading={isLoading}
        rows={getPaginatedData()}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isActions
        onDelete={onDelete}
        error={error}
        deleteLoading={deleteLoading}
      />
    </div>
  )
}

export default Listing

