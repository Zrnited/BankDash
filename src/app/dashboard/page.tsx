"use client";
import { Transactions, Contacts, CardsInfo } from "@/utils/DashboardDatas";
import { AiOutlineSend } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Cards from "@/components/ui/cards";
import Heading from "@/components/ui/sectionHeadings";
import WeeklyActivity from "@/components/graphs/dashboard/weeklyActivity";
import ExpenseStatistics from "@/components/graphs/dashboard/expenseStatistics";
import BalanceHistory from "@/components/graphs/dashboard/balanceHistory";

export default function DashboardPage() {
  const [contactIndex, setContactIndex] = useState<number>(0);

  function moveContactObjects() {
    const lastContact = contactIndex === Contacts?.length - 2;
    const newContactIndex = lastContact ? 0 : contactIndex + 1;
    setContactIndex(newContactIndex);
  }

  return (
    <main className="w-full">
      {/* Cards and Transactions */}
      <section className="flex flex-col justify-center gap-3 py-4 sm:py-0 lg:pt-5 lg:flex-row lg:justify-start lg:px-1">
        <div className="flex flex-col gap-y-5 lg:min-w-[480px] xl:min-w-[720px]">
          <div className="flex flex-row justify-between items-center text-[#343C6A] font-semibold">
            <Heading text="my cards" />
            <Link className="text-sm sm:text-lg" href={"/creditcards"}>
              See All
            </Link>
          </div>
          {/* My cards */}
          <Cards cards={CardsInfo} />
        </div>
        {/* Recent transactions */}
        <div className="flex flex-col gap-y-5 w-full mt-5 sm:mt-0 lg:min-w-[231px]">
          <Heading text="recent transactions" />
          {/* transactions */}
          <div className="flex flex-col gap-8 p-3 bg-white rounded-xl lg:justify-between lg:gap-0 lg:h-full xl:max-w-[350px]">
            {Transactions.map((a, b) => {
              return (
                <div
                  key={b}
                  className="flex flex-row justify-between items-center w-full sm:text-sm"
                >
                  <div className="flex flex-row gap-x-3 items-center">
                    <span className="w-[50px] h-[50px] bg-[#FFF5D9] flex justify-center items-center rounded-full">
                      <Image
                        src={a.icon}
                        alt="icon"
                        priority
                        className="w-[20px] h-auto"
                      />
                    </span>
                    <div className="flex flex-col gap-y-0.5">
                      <h1 className="font-semibold">{a.desc}</h1>
                      <p className="text-sm text-[#718EBF]">{a.date}</p>
                    </div>
                  </div>
                  <p
                    className={
                      a.type === "credit"
                        ? "text-sm text-[#41D4A8] font-medium"
                        : "text-sm text-[#FF4B4A] font-medium"
                    }
                  >
                    {a.amount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="mt-8 flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 xl:gap-x-7">
        {/* Bar chart */}
        <div className="flex flex-col gap-y-5 lg:w-2/3">
          <Heading text="weekly activity" />
          <div className="bg-white p-3 rounded-xl flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-5 justify-end">
              <div className="flex flex-row gap-x-2 items-center text-sm">
                <span className="bg-[#16DBCC] h-[12px] w-[12px] rounded-full"></span>
                <p className="text-[#718EBF] font-light">Deposit</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center text-sm">
                <span className="bg-[#FF82AC] h-[12px] w-[12px] rounded-full"></span>
                <p className="text-[#718EBF] font-light">Withdraw</p>
              </div>
            </div>
            {/* weekly activity bar chart */}
            <WeeklyActivity />
          </div>
        </div>
        {/* pie chart */}
        <div className="flex flex-col gap-y-5 lg:w-1/3">
          <Heading text="expense statistics" />
          <div className="bg-white p-3 rounded-xl lg:h-full lg:flex lg:justify-center lg:items-center">
            <ExpenseStatistics />
          </div>
        </div>
      </section>

      {/* Transfer & Balance History */}
      <section className="mt-8 flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 xl:gap-x-7">
        {/* quick transfer */}
        <div className="flex flex-col gap-y-5 lg:w-[40%]">
          <Heading text="quick transfer" />
          <div className="flex flex-col gap-y-7 bg-white px-3 py-7 rounded-xl">
            <div className="relative">
              <div className="flex flex-row gap-x-5 overflow-hidden">
                {Contacts.map((a, b) => {
                  return (
                    <div
                      key={b}
                      className="text-[12px] text-center flex flex-col items-center min-w-[71px] transition-transform ease-out duration-500"
                      style={{
                        transform: `translateX(-${contactIndex * 100}%)`,
                      }}
                    >
                      <Image
                        src={a.image}
                        priority
                        alt="img"
                        className="w-[50px] h-[50px] rounded-full"
                      />
                      <h1 className="mt-3">{a.name}</h1>
                      <p className="text-[#718EBF]">{a.position}</p>
                    </div>
                  );
                })}
              </div>
              <span
                onClick={moveContactObjects}
                className="flex absolute items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl cursor-pointer right-0 top-5 hover:bg-[#1814F3] hover:text-white hover:shadow-xl transition ease-in-out delay-100"
              >
                <IoChevronForward size={20} />
              </span>
            </div>
            <div className="flex flex-row justify-between items-center text-sm">
              <p className="text-[#718EBF] font-normal">Write Amount</p>
              <form className="relative h-[40px] w-[187px]">
                <input
                  className="h-full w-full rounded-full bg-[#EDF1F7] pl-5 pr-[100px] placeholder:text-[#718EBF] focus:outline-none"
                  placeholder="525.50"
                />
                <button disabled={true} className="absolute top-0 right-0 h-full w-[93px] rounded-full bg-[#1814F3] text-white flex flex-row items-center justify-center cursor-not-allowed gap-x-3 hover:animate-pulse">
                  <p>Send</p>
                  <i>
                    <AiOutlineSend />
                  </i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* balance history */}
        <div className="flex flex-col gap-y-5 lg:w-[60%]">
          <Heading text="balance history" />
          <div className="p-3 bg-white rounded-xl h-full">
            <BalanceHistory />
          </div>
        </div>
      </section>
    </main>
  );
}
