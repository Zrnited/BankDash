import { StaticImageData } from "next/image";
import balanceIcon from "@/assets/icons/balance.png";
import incomeIcon from "@/assets/icons/income.png";
import expenseIcon from "@/assets/icons/expense.png";
import totSavIco from "@/assets/icons/total-saving.png";
import subscription from "@/assets/icons/subscription.png";
import user from "@/assets/icons/person.png";
import service from "@/assets/icons/service.png";

type AccOverview = {
  title: string;
  amount: string;
  icon: StaticImageData;
};

type AccTransaction = {
  icon: StaticImageData;
  date: string;
  title: string;
  purpose: string;
  card: string;
  status: string;
  amount: number;
  type: string;
}

const AccountOverview: AccOverview[] = [
  {
    title: "my balance",
    amount: "$12,750",
    icon: balanceIcon,
  },
  {
    title: "income",
    amount: "$5,600",
    icon: incomeIcon,
  },
  {
    title: "expense",
    amount: "$3,460",
    icon: expenseIcon,
  },
  {
    title: "total saving",
    amount: "$7,920",
    icon: totSavIco,
  },
];

const AccountTransactions:  AccTransaction[] = [
  {
    icon: subscription,
    date: "25 Jan 2021",
    title: "spotify subscription",
    purpose: "shopping",
    card: "1234 ****",
    status: "pending",
    amount: 150,
    type: "expense"
  },
  {
    icon: service,
    date: "25 Jan 2021",
    title: "mobile service",
    purpose: "service",
    card: "1234 ****",
    status: "completed",
    amount: 340,
    type: "expense"
  },
  {
    icon: user,
    date: "25 Jan 2021",
    title: "emily wilson",
    purpose: "transfer",
    card: "1234 ****",
    status: "completed",
    amount: 780,
    type: "income"
  }
]

export { AccountOverview, AccountTransactions };
