import Image from "next/image";
import { AccountOverview, AccountTransactions } from "@/utils/AccountsDatas";
import Heading from "@/components/ui/sectionHeadings";
import subscription from "@/assets/icons/subscription.png";
import user from "@/assets/icons/person.png";
import service from "@/assets/icons/service.png";
import Cards from "@/components/ui/cards";
import { Card } from "@/utils/DashboardDatas";

export default function AccountsPage() {
  const CardInfo: Card[] = [
    {
      id: 1,
      balance: "5,756",
      cardHolder: "eddie cusuma",
      validThru: "12/22",
      isActive: true,
      background: true,
      cardNumber: "3778 **** **** 1234",
    },
  ];

  return (
    <main className="w-full">
      <section className="flex items-center justify-center px-2 mt-4">
        <div className="w-fit grid grid-cols-2 gap-4 lg:grid-cols-4 place-items-center px-2 xl:gap-6">
          {AccountOverview.map((_a, _b) => {
            return (
              <div
                key={_b}
                className="h-[85px] w-[155px] rounded-xl flex flex-row gap-x-2 items-center bg-white p-4 lg:h-[90px] lg:w-[167px] xl:h-[110px] xl:w-[235px]"
              >
                <Image
                  alt="icon"
                  priority
                  src={_a.icon}
                  className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] xl:h-[70px] xl:w-[70px]"
                />
                <div className="flex flex-col justify-between items-start">
                  <p className="text-[12px] capitalize text-[#718EBF] xl:text-base">
                    {_a.title}
                  </p>
                  <h1 className="font-semibold xl:text-2xl">{_a.amount}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="my-6 flex flex-col gap-y-5 items-center lg:flex-row lg:gap-x-3 lg:gap-y-0 lg:items-start">
        {/* last three transactions */}
        <div className="flex flex-col gap-y-5 w-full lg:w-2/3">
          <Heading text="last transaction" />
          <div className="bg-white p-5 rounded-lg flex flex-col gap-y-5 lg:gap-y-2 lg:h-[170px] xl:h-[235px] xl:gap-y-4">
            {AccountTransactions.map((_a, _b) => {
              return (
                <div
                  key={_b}
                  className="capitalize flex justify-between items-center"
                >
                  <div className="flex flex-row gap-x-3 items-center">
                    {_a.icon === subscription && (
                      <div
                        className={`bg-[#DCFAF8] w-[40px] h-[40px] p-2.5 flex justify-center items-center rounded-xl xl:w-[55px] xl:h-[55px]`}
                      >
                        <Image src={_a.icon} priority alt="icon" />
                      </div>
                    )}
                    {_a.icon === user && (
                      <div
                        className={`bg-[#FFE0EB] w-[40px] h-[40px] p-3 flex justify-center items-center rounded-xl xl:w-[55px] xl:h-[55px]`}
                      >
                        <Image src={_a.icon} priority alt="icon" />
                      </div>
                    )}
                    {_a.icon === service && (
                      <div
                        className={`bg-[#E7EDFF] w-[40px] h-[40px] p-3 flex justify-center items-center rounded-xl xl:w-[55px] xl:h-[55px]`}
                      >
                        <Image src={_a.icon} priority alt="icon" />
                      </div>
                    )}
                    <div className="flex flex-col gap-y-0.5 items-start">
                      <h1 className="text-[#232323] text-sm font-medium xl:text-base">
                        {_a.title}
                      </h1>
                      <p className="text-[#718EBF] text-xs lg:text-xs xl:text-[15px]">
                        {_a.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#718EBF] hidden lg:flex lg:text-xs xl:text-base">
                    {_a.purpose}
                  </p>
                  <p className="text-[#718EBF] hidden lg:flex lg:text-xs xl:text-base">
                    {_a.card}
                  </p>
                  <p className="text-[#718EBF] hidden lg:flex lg:text-xs xl:text-base">
                    {_a.status}
                  </p>
                  <p
                    className={`text-[15px] font-semibold lg:text-[12px] xl:text-base ${
                      _a.type === "expense"
                        ? "text-[#FE5C73]"
                        : "text-[#16DBAA]"
                    }`}
                  >
                    {_a.type === "expense"
                      ? `-$${_a.amount.toString()}`
                      : `+$${_a.amount.toString()}`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* My cards */}
        <div className="flex flex-col gap-y-5 w-full items-center lg:w-1/3">
          <div className="flex flex-row items-center justify-between w-full">
            <Heading text="my card" />
            <p className="capitalize cursor-pointer hover:underline text-sm lg:text-base text-[#343C6A] font-medium">see all</p>
          </div>
          <div className="w-full flex justify-center">
            <Cards cards={CardInfo} className="w-[325px] h-[197px] bg-gradient-to-r justify-between lg:min-h-[170px] xl:min-w-full xl:min-h-[235px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
