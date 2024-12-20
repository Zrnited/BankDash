import { StaticImageData } from "next/image";
import image1 from "@/assets/images/julia-volk.png";
import image2 from "@/assets/images/marcel-strauss.png";
import image3 from "@/assets/images/emmanuel-minca.png";
import paypal from "@/assets/icons/paypal.png";
import card from "@/assets/icons/card.png";
import dollar from "@/assets/icons/dollar.png";

type Card = {
  id: number;
  balance: string;
  cardHolder: string;
  validThru: string;
  isActive: boolean;
  background: boolean;
  cardNumber: string;
};

type Transaction = {
  icon: StaticImageData; 
  desc: string;
  date: string;
  amount: string;
  type: string;
}

type Contact = {
  image: StaticImageData;
  name: string;
  position: string;
}

const CardsInfo: Card[] = [
  {
    id: 1,
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    isActive: true,
    background: true,
    cardNumber: "3778 **** **** 1234",
  },
  {
    id: 2,
    balance: "$5,756",
    cardHolder: "Zr Nited",
    validThru: "12/22",
    isActive: true,
    background: false,
    cardNumber: "3778 **** **** 1234",
  },
  // {
  //   id: 2,
  //   balance: "$5,756",
  //   cardHolder: "Elon Musk",
  //   validThru: "12/22",
  //   isActive: true,
  //   background: true,
  //   cardNumber: "3778 **** **** 1234",
  // }
];

const Transactions: Transaction[] = [
  {
    icon: card,
    desc: "Deposit from my bank",
    date: "28 January 2021",
    amount: "-$850",
    type: "debit"
  },
  {
    icon: paypal,
    desc: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    type: "credit"
  },
  {
    icon: dollar,
    desc: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    type: "credit"
  }
]

const Contacts: Contact[] = [
  {
    image: image1,
    name: "Livia Bator",
    position: "CEO"
  },
  {
    image: image2,
    name: "Randy Press",
    position: "Director"
  },
  {
    image: image3,
    name: "Workman",
    position: "Designer"
  },
  {
    image: image1,
    name: "Livia Bator",
    position: "CEO"
  },
  {
    image: image2,
    name: "Randy Press",
    position: "Director"
  },
  {
    image: image3,
    name: "Workman",
    position: "Designer"
  }
]

export { CardsInfo, Transactions, Contacts }
