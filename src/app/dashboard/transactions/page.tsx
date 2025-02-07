"use client";
import Link from "next/link";
import Cards from "@/components/ui/cards";
import { FaChevronLeft } from "react-icons/fa";
import { CardsInfo } from "@/utils/DashboardDatas";
import MyExpenses from "@/components/graphs/transactions/myExpenses";
import Heading from "@/components/ui/sectionHeadings";
import Table from "@/tables/TransactionsTable";
import { Transactions } from "@/utils/TransactionDatas";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function TransactionsPage() {
  const [dataState, setDataState] = useState<string>("AllTransactions");
  console.log(dataState);

  //pagination logic
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  //calculate total pages
  const totalPages = Math.ceil(Transactions.length / ITEMS_PER_PAGE);

  //get current page data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = Transactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // handle page change
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const tableHead = [
    {
      name: "Description",
      className: "text-left",
    },
    {
      name: "Transactions ID",
      className: "hidden lg:table-cell",
    },
    {
      name: "Type",
      className: "hidden lg:table-cell",
    },
    {
      name: "Card",
      className: "hidden lg:table-cell",
    },
    {
      name: "Date",
      className: "hidden lg:table-cell",
    },
    {
      name: "Amount",
      className: "text-left",
    },
    {
      name: "Receipt",
      className: "hidden lg:table-cell",
    },
  ];

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
          <div
            className="flex flex-col gap-y-3 w-full cursor-pointer"
            onClick={()=>setDataState("AllTransactions")}
          >
            <h2>All Transactions</h2>
            <hr
              className={
                dataState === "AllTransactions"
                  ? "border border-[#718EBF] rounded-full transition ease-in-out delay-100"
                  : ""
              }
            />
          </div>
          <div
            className="flex flex-col text-center gap-y-3 w-full cursor-pointer"
            onClick={()=>setDataState("income")}
          >
            <h2>Income</h2>
            <hr
              className={
                dataState === "income"
                  ? "border border-[#718EBF] rounded-full transition ease-in-out delay-100"
                  : ""
              }
            />
          </div>
          <div
            className="flex flex-col text-center gap-y-3 w-full cursor-pointer"
            onClick={()=>setDataState("expense")}
          >
            <h2>Expense</h2>
            <hr
              className={
                dataState === "expense"
                  ? "border border-[#718EBF] rounded-full transition ease-in-out delay-100"
                  : ""
              }
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-3">
          <Table currentPage={currentPage} dataState={dataState} tableHead={tableHead} tableBody={currentData} />
        </div>

        {/* Pagination */}
        <div className="p-6 flex justify-end items-center gap-x-3">
          {/* previous */}
          <button onClick={()=>goToPage(currentPage - 1)} disabled={currentPage === 1} className="flex flex-row gap-x-2 items-center cursor-pointer p-1">
            <i>
              <FaChevronLeft color="#1814F3" />
            </i>
            <p className="text-sm capitalize text-[#1814F3]">previous</p>
          </button>

          {/* numbers */}
          <div className="flex flex-row gap-x-1 items-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === page ? "bg-[#1814F3] text-white" : "text-[#1814F3] border-none"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* next */}
          <button onClick={()=> goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="flex flex-row gap-x-2 items-center cursor-pointer p-1">
            <p className="text-sm capitalize text-[#1814F3]">next</p>
            <i>
              <FaChevronRight color="#1814F3" />
            </i>
          </button>
        </div>
      </section>
    </main>
  );
}
