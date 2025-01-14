export type Transaction = {
  id: string;
  desc: string;
  type: string;
  card: string;
  date: string;
  amount: number;
  mode: string;
};

const Transactions: Transaction[] = [
  {
    id: "#12548795",
    desc: "spotify subscription",
    type: "shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: 2500,
    mode: "expense"
  },
  {
    id: "#12548796",
    desc: "freepik sales",
    type: "transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: 750,
    mode: "income"
  },
  {
    id: "#12548797",
    desc: "mobile service",
    type: "service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: 150,
    mode: "expense"
  },
  {
    id: "#12548798",
    desc: "wilson",
    type: "transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: 1050,
    mode: "expense"
  },
  {
    id: "#12548799",
    desc: "emily",
    type: "transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: 840,
    mode: "income"
  },
//   {
//     id: "#12548795",
//     desc: "spotify subscription",
//     type: "shopping",
//     card: "1234 ****",
//     date: "28 Jan, 12.30 AM",
//     amount: 2500,
//     mode: "debit"
//   },
//   {
//     id: "#12548796",
//     desc: "freepik sales",
//     type: "transfer",
//     card: "1234 ****",
//     date: "25 Jan, 10.40 PM",
//     amount: 750,
//     mode: "credit"
//   },
//   {
//     id: "#12548797",
//     desc: "mobile service",
//     type: "service",
//     card: "1234 ****",
//     date: "20 Jan, 10.40 PM",
//     amount: 150,
//     mode: "debit"
//   },
//   {
//     id: "#12548798",
//     desc: "wilson",
//     type: "transfer",
//     card: "1234 ****",
//     date: "15 Jan, 03.29 PM",
//     amount: 1050,
//     mode: "debit"
//   },
//   {
//     id: "#12548799",
//     desc: "emily",
//     type: "transfer",
//     card: "1234 ****",
//     date: "14 Jan, 10.40 PM",
//     amount: 840,
//     mode: "debit"
//   },
];

export { Transactions };
