import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium ">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="fle x items-center gap-2">
          <Button
            onClick={() => onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className="h4 w-4" />
            <span className="sr-only">Ir para primera página</span>
          </Button>

          <Button
            onClick={() => onPageChange(pageIndex - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <ChevronLeft className="h4 w-4" />
            <span className="sr-only">Ir para página anterior</span>
          </Button>

          <Button
            onClick={() => onPageChange(pageIndex + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronRight className="h4 w-4" />
            <span className="sr-only">Ir para próxima página</span>
          </Button>

          <Button
            onClick={() => onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronsRight className="h4 w-4" />
            <span className="sr-only">Ir para última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
