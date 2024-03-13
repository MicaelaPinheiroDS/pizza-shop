import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">12</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 dark:text-rose-400"> -2%</span> em
            relação a ontem
          </p>
        </span>
      </CardContent>
    </Card>
  )
}
