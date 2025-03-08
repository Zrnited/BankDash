import Image from "next/image";
// import tot from "@/assets/icons/total-invested.png";
import { InvstOverview } from "@/utils/InvestmentsDatas";
import Heading from "@/components/ui/sectionHeadings";
import YearlyTotalInvestment from "@/components/graphs/investments/yearlyTotalInvestments";
import MonthlyRevenue from "@/components/graphs/investments/monthlyRevenue";
import apple_store from "@/assets/icons/appleStore.png";
import samsung from "@/assets/icons/samsung.png";
import tesla from "@/assets/icons/tesla.png";

export default function InvestmentsPage() {
  return (
    <main className="w-full pb-[200px]">
      <section className="p-5 flex flex-col gap-5 lg:flex-row lg:justify-between lg:px-0">
        {InvstOverview.map((overview, idx) => {
          return (
            <div
              key={idx}
              className="bg-white flex flex-row gap-x-3 items-center w-full py-5 pr-3 pl-10 rounded-xl justify-start lg:w-[231px] hover:scale-105 hover:shadow-md hover:border hover:border-gray-300 transition delay-100 ease-in-out lg:pl-3 xl:w-full xl:px-5"
            >
              <div
                className={`w-[45px] h-[45px] bg-[#DCFAF8] rounded-full flex items-center justify-center lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px] ${overview.iconBg}`}
              >
                <Image
                  priority
                  src={overview.icon}
                  alt="icon"
                  className="w-[40%] h-auto"
                />
              </div>
              <div className="capitalize flex flex-col gap-y-0.5">
                <p className="text-xs text-[#718EBF] xl:text-base">
                  {overview.title}
                </p>
                <h1 className="text-[#232323] font-semibold xl:text-xl">
                  {overview.amount}
                </h1>
              </div>
            </div>
          );
        })}
      </section>
      <section className="p-5 flex flex-col gap-5 lg:flex-row lg:w-full lg:px-0">
        {/* yearly total investments */}
        <div className="flex flex-col gap-y-4 lg:w-full">
          <Heading text="yearly total investment" />
          <YearlyTotalInvestment />
        </div>
        {/* monthly revenue */}
        <div className="flex flex-col gap-y-4 lg:w-full">
          <Heading text="monthly revenue" />
          <MonthlyRevenue />
        </div>
      </section>
      <section className="p-5 flex flex-col gap-5 lg:flex-row lg:w-full lg:px-0">
        <div className="flex flex-col gap-y-4 lg:w-[65%]">
          <Heading text="my investment" />
          <div className="flex flex-col gap-y-5">
            <div className="bg-white rounded-lg flex items-center justify-between capitalize text-xs flex-row p-3.5 xl:text-[15px]">
              <div className="flex flex-row gap-x-3 items-center">
                <div className="bg-[#FFE0EB] rounded-xl h-[45px] w-[45px] flex items-center justify-center">
                  <Image
                    alt="icon"
                    src={apple_store}
                    className="w-[40%] h-auto"
                  />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h2 className="text-sm font-semibold xl:text-base">apple store</h2>
                  <p className="text-[#718EBF]">e-commerce, marketplace</p>
                </div>
                <div className="flex-col gap-y-0.5 hidden sm:flex sm:pl-8 lg:pl-2 xl:pl-8">
                  <h2 className="text-sm font-semibold xl:text-base">$54,000</h2>
                  <p className="text-[#718EBF]">envestment value</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <p className="text-[#16DBAA] text-sm xl:text-base">+16%</p>
                <p className="text-[#718EBF] hidden sm:flex">return value</p>
              </div>
            </div>
            <div className="bg-white rounded-lg flex items-center justify-between capitalize text-xs flex-row p-3.5 xl:text-[15px]">
              <div className="flex flex-row gap-x-3 items-center">
                <div className="bg-[#E7EDFF] rounded-xl h-[45px] w-[45px] flex items-center justify-center">
                  <Image
                    alt="icon"
                    src={samsung}
                    className="w-[40%] h-auto"
                  />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h2 className="text-sm font-semibold xl:text-base">samsung mobile</h2>
                  <p className="text-[#718EBF]">e-commerce, marketplace</p>
                </div>
                <div className="flex-col gap-y-0.5 hidden sm:flex sm:pl-8 lg:pl-2 xl:pl-8">
                  <h2 className="text-sm font-semibold xl:text-base">$25,000</h2>
                  <p className="text-[#718EBF]">envestment value</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <p className="text-[#FE5C73] text-sm xl:text-base">-4%</p>
                <p className="text-[#718EBF] hidden sm:flex">return value</p>
              </div>
            </div>
            <div className="bg-white rounded-lg flex items-center justify-between capitalize text-xs flex-row p-3.5 xl:text-[15px]">
              <div className="flex flex-row gap-x-3 items-center">
                <div className="bg-[#FFF5D9] rounded-xl h-[45px] w-[45px] flex items-center justify-center">
                  <Image
                    alt="icon"
                    src={tesla}
                    className="w-[40%] h-auto"
                  />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h2 className="text-sm font-semibold xl:text-base">tesla motors</h2>
                  <p className="text-[#718EBF]">electric vehicles</p>
                </div>
                <div className="flex-col gap-y-0.5 hidden sm:flex sm:pl-8 lg:pl-2 xl:pl-8">
                  <h2 className="text-sm font-semibold xl:text-base">$8,200</h2>
                  <p className="text-[#718EBF]">envestment value</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <p className="text-[#16DBAA] text-sm xl:text-base">+25%</p>
                <p className="text-[#718EBF] hidden sm:flex">return value</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:w-[35%]">
          <Heading text="trending stock" />
        </div>
      </section>
    </main>
  );
}
