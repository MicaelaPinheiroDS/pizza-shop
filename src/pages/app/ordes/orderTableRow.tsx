import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        831902UWQAJKE1283
      </TableCell>
      <TableCell className="text-muted-foreground">Há 15 minitos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="fent-medion text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Micaela Pinheiro</TableCell>
      <TableCell className="font-medium">R$ 149,90</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="h-3 w-3 mr-2" />
          Aporvar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
