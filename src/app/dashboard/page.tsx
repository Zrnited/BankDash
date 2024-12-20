"use client";
import { CardsInfo, Transactions, Contacts } from "@/utils/DashboardDatas";
import { AiOutlineSend } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import chipWhite from "@/assets/images/chipcard-white.png";
import chipBlack from "@/assets/images/chipcardblack.png";
import mlogo from "@/assets/images/mastercard-logo.png";
import { useState } from "react";

export default function DashboardPage() {

  const [contactIndex, setContactIndex] = useState<number>(0);

  function moveContactObjects (){
    const lastContact = contactIndex === Contacts?.length - 2;
    const newContactIndex = lastContact ? 0 : contactIndex + 1;
    setContactIndex(newContactIndex);
  }

  return (
    <main className="w-full">
      {/* Cards and Transactions */}
      <section className="flex flex-col justify-center gap-3 py-4 sm:py-0 lg:flex-row lg:justify-start lg:px-1">
        <div className="flex flex-col gap-y-2 lg:min-w-[480px] xl:min-w-[720px]">
          <div className="flex flex-row justify-between items-center text-[#343C6A] font-semibold">
            <h1 className="text-lg">My Cards</h1>
            <Link href={"/creditcards"}>See All</Link>
          </div>
          {/* My cards */}
          <div className="flex flex-row gap-x-4 items-center activity overflow-x-scroll lg:overflow-hidden lg:w-full lg:gap-x-3">
            {CardsInfo.map((a, b) => {
              return (
                <div
                  key={b}
                  className={
                    a.background
                      ? "min-w-[265px] min-h-[170px] rounded-xl text-white bg-gradient-to-t from-blue-700 to-blue-600 p-5 flex flex-col gap-y-2 lg:min-w-[231px] lg:max-h-[170px] xl:min-w-[350px] xl:min-h-[225px] xl:justify-between"
                      : "min-w-[265px] min-h-[170px] text-black rounded-xl bg-white border border-[#DFEAF2] p-5 flex flex-col gap-y-2 lg:min-w-[231px] lg:max-h-[170px] xl:min-w-[350px] xl:min-h-[225px] xl:justify-between"
                  }
                >
                  <div className="flex flex-row justify-between w-full">
                    <div>
                      <p className="text-xs font-light">Balance</p>
                      <h1 className="text-lg xl:text-xl">{a.balance}</h1>
                    </div>
                    {a.background ? (
                      <Image
                        src={chipWhite}
                        alt="chipcard"
                        priority
                        className="w-[34px] h-[34px]"
                      />
                    ) : (
                      <Image
                        src={chipBlack}
                        alt="chipcard"
                        priority
                        className="w-[34px] h-[34px]"
                      />
                    )}
                  </div>
                  <div className="flex gap-x-6 text-[13px] md:gap-x-5 xl:gap-x-10 xl:text-lg">
                    <div className="flex flex-col">
                      <p className="uppercase text-sm text-gray-300 md:text-xs xl:text-sm">
                        card holder
                      </p>
                      <h1 className="capitalize font-semibold">
                        {a.cardHolder}
                      </h1>
                    </div>
                    <div className="flex flex-col">
                      <p className="uppercase text-gray-300 text-sm lg:text-xs xl:text-sm">
                        valid thru
                      </p>
                      <h1 className="capitalize font-semibold">
                        {a.validThru}
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-lg mt-2 lg:text-base xl:text-xl">
                    <h3>{a.cardNumber}</h3>
                    <Image
                      src={mlogo}
                      priority
                      alt="logo"
                      className="w-[27px] h-auto xl:w-[44px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Recent transactions */}
        <div className="flex flex-col gap-y-3 w-full mt-5 sm:mt-0 lg:min-w-[231px]">
          <div>
            <h1 className="text-[#343C6A] font-semibold">Recent Transaction</h1>
          </div>
          {/* transactions */}
          <div className="flex flex-col gap-8 p-3 bg-white rounded-xl xl:max-w-[350px]">
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
      <section className="bg-white p-5 mt-8">
        {/* bar chart */}
        <div>a</div>
        {/* pie chart */}
        <div>b</div>
      </section>

      {/* Transfer & Balance History */}
      <section className="bg-white p-5 mt-8">
        {/* quick transfer */}
        <div className="flex flex-col gap-y-8">
          <h1 className="font-semibold capitalize text-lg text-[#343C6A]">
            quick transfer
          </h1>
          <div className="flex flex-col gap-y-7 relative">
            <div className="flex flex-row gap-x-5 overflow-hidden">
              {Contacts.map((a, b) => {
                return (
                  <div key={b} className="text-[12px] text-center flex flex-col items-center min-w-[71px] transition-transform ease-out duration-500" style={{ transform: `translateX(-${contactIndex * 100}%)`}}>
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
            <div className="flex flex-row justify-between items-center text-sm">
              <p className="text-[#718EBF] font-normal">Write Amount</p>
              <form className="relative h-[40px] w-[187px]">
                <input
                  className="h-full w-full rounded-full bg-[#EDF1F7] pl-5 pr-[100px] placeholder:text-[#718EBF] focus:outline-none"
                  placeholder="525.50"
                />
                <button className="absolute top-0 right-0 h-full w-[93px] rounded-full bg-[#1814F3] text-white flex flex-row items-center justify-center gap-x-3 hover:animate-pulse">
                  <p>Send</p>
                  <i>
                    <AiOutlineSend />
                  </i>
                </button>
              </form>
            </div>
            <span onClick={moveContactObjects} className="flex absolute items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg cursor-pointer right-0 top-4 hover:bg-[#718EBF] hover:text-white hover:shadow-xl transition ease-in-out delay-100">
              <IoChevronForward />
            </span>
          </div>
        </div>
        {/* balance history */}
      </section>
    </main>
  );
}
