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

export default function OverviewTab() {
  //   interface DashboardSummary {
  //     totalBalance: number;
  //     totalCredits: number;
  //     totalDebits: number;
  //     transactionCount: number;
  //     balanceChange: number;
  //     creditsChange: number;
  //     debitsChange: number;
  //     transactionChange: number;
  //   }
  //   const dashboardSummary:DashboardSummary[] = [
  //     {totalBalance: 12650;
  //     totalCredits: 899;
  //     totalDebits: 900;
  //     transactionCount: number;
  //     balanceChange: number;
  //     creditsChange: number;
  //     debitsChange: number;
  //     transactionChange: number;}
  //   ]

  interface Transaction {
    id: string;
    date: string;
    remark: string;
    amount: number;
    currency: string;
    type: "Credit" | "Debit";
  }

  const { transactionList, filterFunction } = useData();
  return (
    <div className='pt-7'>
      <h4 className='text-[20px] leading-6 font-bold pt-3 pb-4.5'>Summary</h4>
      <div className='pb-3'>
        <Card title='Total Balance' amount='$1500' percentage='+2%'></Card>
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
