import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './card/dayOrdersAmountCard'
import { MonthCanceldOrdersAmountCard } from './card/monthCanceldOrdersAmountCard'
import { MonthOrdersAmountCard } from './card/monthOrdersAmountCard'
import { MonthRevenueCard } from './card/monthRevenueCard'
import { RevenueChart } from './revenueChart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceldOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
      </div>
    </>
  )
}
