import {
  TableWrapper,
  TableData,
  TableHead,
  TableRow,
} from "@/components/Table";
import StatusBadge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { useData } from "@/context/DataContext";
import { getBadgeType } from "@/utils/getBadgeType";

interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export default function OverviewTab() {
  const summary = [
    { title: "Total Balance", totalBalance: 12650, balanceChange: 2 },
    { title: "Total Credits", totalBalance: 7890, balanceChange: 3 },
    { title: "Total Debits", totalBalance: 4455, balanceChange: -2 },
    { title: "Transactions", totalBalance: 150, balanceChange: 10 },
  ];

  const { transactionList, filterFunction } = useData();

  const formatNumber = new Intl.NumberFormat("en-US");

  return (
    <div className='pt-7'>
      <h4 className='text-[20px] leading-6 font-bold pt-3 pb-4.5'>Summary</h4>
      <div className='pb-3 flex items-center'>
        {summary.map((card, index) => (
          <div
            className={`${index == summary.length - 1 ? "mr-0" : "mr-7"}`}
            key={index}
          >
            <Card
              title={card.title}
              amount={`${
                card.title !== "Transactions" ? "$" : ""
              }${formatNumber.format(card.totalBalance)}`}
              percentage={`${card.balanceChange > 0 ? "+" : ""}${
                card.balanceChange
              }%`}
            ></Card>
          </div>
        ))}
      </div>
      <TableWrapper customClass='my-7'>
        <TableRow>
          <TableHead
            customClass='w-[60%]'
            headTitle='Date'
            onSort={filterFunction!}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Remark'
            onSort={filterFunction!}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Amount'
            onSort={filterFunction!}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Currency'
            onSort={filterFunction!}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Type'
            onSort={filterFunction!}
          />
        </TableRow>
        {transactionList.map((transaction, index) => (
          <TableRow key={index}>
            <TableData customClass='w-[60%]'>
              <p className='text-[#1B2528]'>{transaction.date}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <p className='text-[#1B2528]'>{transaction.remark}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <p className='text-[#1B2528]'>{transaction.amount}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <p className='text-[#1B2528]'>{transaction.currency}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <StatusBadge
                type={getBadgeType(transaction.type)}
                status={transaction.type}
              />
            </TableData>
          </TableRow>
        ))}
      </TableWrapper>
    </div>
  );
}
