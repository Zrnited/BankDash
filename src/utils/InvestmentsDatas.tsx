import { StaticImageData } from "next/image";
import totalInvested from "@/assets/icons/total-invested.png";
import invstNumber from "@/assets/icons/investment-number.png";
import ror from "@/assets/icons/repeat.png";

type InvestmentOverview = {
  title: string;
  amount: string;
  icon: StaticImageData;
  iconBg: string;
};

const InvstOverview: InvestmentOverview[] = [
  {
    title: "total invested amount",
    amount: "$150,000",
    icon: totalInvested,
    iconBg: "bg-[#DCFAF8]",
  },
  {
    title: "number of investments",
    amount: "1,250",
    icon: invstNumber,
    iconBg: "bg-[#FFE0EB]",
  },
  {
    title: "rate of return",
    amount: "+5.80%",
    icon: ror,
    iconBg: "bg-[#E7EDFF]",
  },
];

export { InvstOverview };
