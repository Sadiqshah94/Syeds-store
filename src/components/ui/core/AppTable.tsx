import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { PencilLine, PlusIcon, Trash } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface Column {
  label: string
  className?: string
}

interface AppTableProps {
  columns: Column[]
  isActions?: boolean
  rows: any[]
  isLoading: boolean
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void 
}

const SkeletonRow = ({ columns, isActions }: { columns: Column[]; isActions: boolean }) => (
  <TableRow>
    {columns.map((_, index) => (
      <TableCell key={index}>
        <Skeleton className="h-6 w-full" />
      </TableCell>
    ))}
    {isActions && (
      <TableCell>
        <div className="flex gap-2 justify-end">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </TableCell>
    )}
  </TableRow>
)

const AppTable = ({
  columns,
  isActions = false,
  rows,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
}: AppTableProps) => {
  if (columns.length === 0) {
    return <div>No columns defined</div>
  }

  console.log("loading....",isLoading)

  const renderPaginationItems = () => {
    const items = []
    const maxVisiblePages = 5
    const halfVisible = Math.floor(maxVisiblePages / 2)

    let startPage = Math.max(currentPage - halfVisible, 1)
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault()
              onPageChange(i)
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return items
  }

  const ITEMS_PER_PAGE = 10

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column: Column, index: number) => (
              <TableHead key={index} className={column.className || ""}>
                {column.label.toUpperCase()}
              </TableHead>
            ))}
            {isActions && <TableHead className="text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <SkeletonRow key={index} columns={columns} isActions={isActions} />
            ))
          ) : rows.length > 0 ? (
            rows.map((row: any, rowIndex: number) => (
              <TableRow key={rowIndex}>
                {columns.map((col: Column, colIndex: number) => (
                <TableCell key={colIndex}>
                {col.label.toLowerCase() === "image" ? (
                  <img
                    src={Array.isArray(row.images) && row.images.length > 0 ? row.images[0] : "/assets/imgs/product-image.webp"}
                    alt={row.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : col.label.toLowerCase() === "category name" ? (
                  row.category?.name || "N/A"
                ) : (
                  row[col.label.toLowerCase()] || "N/A"
                )}
              </TableCell>
                ))}
                {isActions && (
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button size="icon" className="bg-green-400 h-8 w-8">
                        {" "}
                        <PlusIcon className="h-4 w-4" />{" "}
                      </Button>
                      <Button size="icon" variant="destructive" className="h-8 w-8">
                        {" "}
                        <Trash className="h-4 w-4" />{" "}
                      </Button>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        {" "}
                        <PencilLine className="h-4 w-4" />{" "}
                      </Button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + (isActions ? 1 : 0)} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length + (isActions ? 1 : 0)}>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage > 1) onPageChange(currentPage - 1)
                      }}
                    />
                  </PaginationItem>
                  {renderPaginationItems()}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage < totalPages) onPageChange(currentPage + 1)
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default AppTable

