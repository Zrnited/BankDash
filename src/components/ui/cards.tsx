import { Card } from "@/utils/DashboardDatas";
import Image from "next/image";
import chipWhite from "@/assets/images/chipcard-white.png";
import chipBlack from "@/assets/images/chipcardblack.png";
import mlogo from "@/assets/images/mastercard-logo.png";

export interface CardsProps {
  cards: Card[];
}

export default function Cards({ cards }: CardsProps) {
  return (
    <div className="flex flex-row gap-x-4 items-center activity overflow-x-scroll lg:overflow-hidden lg:w-full lg:gap-x-3">
      {cards.map((a, b) => {
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
                <h1 className="capitalize font-semibold">{a.cardHolder}</h1>
              </div>
              <div className="flex flex-col">
                <p className="uppercase text-gray-300 text-sm lg:text-xs xl:text-sm">
                  valid thru
                </p>
                <h1 className="capitalize font-semibold">{a.validThru}</h1>
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
  );
}
