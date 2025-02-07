/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
// import { type Dispatch, type SetStateAction } from "react";
import arrowUp from "@/assets/icons/arrow-up.png";
import arrowDn from "@/assets/icons/arrow-down.png";
import { Transaction } from "@/utils/TransactionDatas";
import { useEffect, useState } from "react";

export interface TableProps {
  tableHead: (
    | {
        name: string;
        className: string;
      }
    | {
        name: string;
        className?: undefined;
      }
  )[];
  tableBody: {
    id: string;
    desc: string;
    type: string;
    card: string;
    date: string;
    amount: number;
    mode: string;
  }[];
  dataState: string;
  currentPage: number;
  // tableBody: object[]
  // setUserId?: Dispatch<SetStateAction<number | undefined>>;
}

export default function Table({ tableHead, tableBody, dataState, currentPage }: TableProps) {
  // function UpdateUserid(e: number){
  //   if(setUserId){
  //     setUserId(e);
  //   } else {
  //     return null
  //   }
  // }

  const [data, setData] = useState<Transaction[]>(tableBody);

  function filterIncome() {
    const incomeArray = tableBody.filter((prevState) => {
      return prevState.mode !== "expense";
    });
    setData(incomeArray);
  }

  function filterExpense() {
    const expenseArray = tableBody.filter((prevState) => {
      return prevState.mode !== "income";
    });
    setData(expenseArray);
  }

  useEffect(()=>{
    if(dataState === "income") {
      filterIncome()
    } else if (dataState === "expense"){
      filterExpense()
    } else {
      setData(tableBody);
    }
  }, [dataState])

  useEffect(()=>{
    setData(tableBody);
  }, [currentPage])

  return (
    <table className="w-full border-collapse border-spacing-x-2 border-spacing-y-2 text-left font-semibold text-sm">
      <thead>
        <tr>
          {tableHead?.map((item, index) => {
            return (
              <th
                className={`${item?.className} text-sm text-[#718EBF] border-b-[#E4E4E4] border-b font-medium h-[45px]`}
                key={index}
                style={{ fontWeight: "normal" }}
              >
                {item.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="rounded-b-lg border-b-[1px] border-gray-700 py-2 capitalize">
        {data.map((transaction, index) => {
          return (
            <tr
              className="border-b-[#E4E4E4] border-b hover:bg-[#f0eeee] transition delay-100 lg:text-[15px]"
              key={index}
            >
              <td style={{ fontWeight: "normal" }} className="py-4">
                <div className="flex flex-row gap-x-2 items-center text-medium">
                  <Image
                    className=""
                    src={transaction.mode === "expense" ? arrowUp : arrowDn}
                    alt="avatar"
                    priority
                    height={35}
                    width={35}
                  />
                  <div className="flex flex-col gap-y-0.5">
                    <p>{transaction.desc}</p>
                    <p className="lg:hidden text-[12px] text-[#718EBF]">{transaction.date}</p>
                  </div>
                </div>
              </td>
              <td
                className="hidden lg:table-cell"
                style={{ fontWeight: "normal" }}
              >
                {transaction.id}
              </td>
              <td
                className="hidden lg:table-cell"
                style={{ fontWeight: "normal" }}
              >
                {transaction.type}
              </td>
              <td
                className="hidden lg:table-cell"
                style={{ fontWeight: "normal" }}
              >
                {transaction.card}
              </td>
              <td
                className="hidden lg:table-cell"
                style={{ fontWeight: "normal" }}
              >
                {transaction.date}
              </td>
              {transaction.mode === "expense" ? (
                <td style={{ fontWeight: "normal", color: "#FE5C73" }}>
                  {`-$${transaction.amount}`}
                </td>
              ) : (
                <td style={{ fontWeight: "normal", color: "#16DBAA" }}>
                  {`+$${transaction.amount}`}
                </td>
              )}
              <td
                className="hidden lg:table-cell"
                style={{ fontWeight: "normal", color: "#123288" }}
              >
                <button className="p-3 rounded-full border-2 border-[#123288]">Download</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
