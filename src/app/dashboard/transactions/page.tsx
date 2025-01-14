"use client";
import Link from "next/link";
import Cards from "@/components/ui/cards";
import { CardsInfo } from "@/utils/DashboardDatas";
import MyExpenses from "@/components/graphs/transactions/myExpenses";
import Heading from "@/components/ui/sectionHeadings";
import Table from "@/tables/TransactionsTable";
import { Transactions } from "@/utils/TransactionDatas";

export default function TransactionsPage() {

  const tableHead = [
    {
      name: "Description",
      className: "text-left"
    },
    {
      name: "Transactions ID",
      className: "hidden lg:table-cell"
    },
    {
      name: "Type",
      className: "hidden lg:table-cell"
    },
    {
      name: "Card",
      className: "hidden lg:table-cell"
    },
    {
      name: "Date",
      className: "hidden lg:table-cell"
    },
    {
      name: "Amount",
      className: "text-left"
    },
    {
      name: "Receipt",
      className: "hidden lg:table-cell"
    },
  ]

  return (
    <main className="w-full">
      <section className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-3">
        {/* My Cards */}
        <div className="flex flex-col gap-y-2 lg:min-w-[480px] xl:min-w-[720px]">
          <div className="flex flex-row justify-between items-center text-[#343C6A] font-semibold">
            <h1 className="text-lg">My Cards</h1>
            <Link href={"/creditcards"}>+Add Card</Link>
          </div>
          {/* My cards */}
          <Cards cards={CardsInfo} />
        </div>

        {/* My expense */}
        <div className="flex flex-col gap-y-2 lg:w-full">
          <h1 className="text-[#343C6A] font-semibold">My Expense</h1>
          <div className="flex w-full lg:h-full">
            <MyExpenses />
          </div>
        </div>
      </section>
      <section className="mt-8">
        <Heading text="recent transactions" />
        <div className="flex flex-row py-3 text-sm text-[#718EBF] font-medium max-w-[500px]">
          <div className="flex flex-col gap-y-1 w-full">
            <h2>All Transactions</h2>
            <hr className="" />
          </div>
          <div className="flex flex-col text-center gap-y-1 w-full">
            <h2>Income</h2>
            <hr className="" />
          </div>
          <div className="flex flex-col text-center gap-y-1 w-full">
            <h2>Expense</h2>
            <hr className="" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-3">
          <Table tableHead={tableHead} tableBody={Transactions} />
        </div>
      </section>
    </main>
  );
}
