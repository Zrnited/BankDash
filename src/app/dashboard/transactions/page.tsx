"use client";
import Link from "next/link";
import Cards from "@/components/ui/cards";
import { CardsInfo } from "@/utils/DashboardDatas";

export default function TransactionsPage() {
  return (
    <main className="w-full">
      <section className="flex flex-col gap-y-5">
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
        <div>
          <h1 className="text-[#343C6A] font-semibold">My Expense</h1>
          <div>
            <div className="h-[214px] bg-[#16DBCC] flex justify-center items-center rounded-xl">
              graph
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
