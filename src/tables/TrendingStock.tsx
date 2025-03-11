/* eslint-disable react-hooks/exhaustive-deps */

export default function TrendingStock() {
  const headings = [
    {
      name: "SL No",
      classname: "",
    },
    {
      name: "Name",
      classname: "",
    },
    {
      name: "Price",
      classname: "",
    },
    {
      name: "Return",
      classname: "",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Trivago",
      price: 520,
      return: "+5%",
    },
    {
      id: 2,
      name: "Canon",
      price: 480,
      return: "+10%",
    },
    {
      id: 3,
      name: "Uber Food",
      price: 350,
      return: "-3%",
    },
    {
      id: 4,
      name: "Nokia",
      price: 940,
      return: "+2%",
    },
    {
      id: 5,
      name: "Tiktok",
      price: 670,
      return: "-12%",
    },
  ];

  return (
    <table className="w-full border-collapse border-spacing-x-2 border-spacing-y-2 text-left font-semibold text-sm">
      <thead>
        <tr>
          {headings.map((item, index) => {
            return (
              <th
                className={`${item?.classname} text-sm text-[#718EBF] border-b-[#F4F5F7] border-b font-medium h-[45px]`}
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
        {data.map((stock, index) => {
          return (
            <tr
              className="font-normal"
              key={index}
            >
              <td
                className="py-2"
              >
                {`0${stock.id}.`}
              </td>
              <td
                className="py-2"
              >
                {stock.name}
              </td>
              <td
                className="py-2"
              >
                {`$${stock.price}`}
              </td>
              <td
                className="py-2 text-green-600"
                style={stock.return.includes("+") ? { color: "#16DBAA" } : { color: "#FE5C73" }}
              >
                {stock.return}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
