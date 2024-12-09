import { BanknoteIcon } from "lucide-react";
import React from "react";

const Logs = () => {
  interface LogsType {
    date: string;
    amount: string;
    success: boolean;
  }
  const LogsDet = [
    {
      date: "tue-8th-24",
      amount: "0.00034btc",
      success: true,
    },
    {
      date: "thur-10th-24",
      amount: "0.00634btc",
      success: false,
    },
    {
      date: "fri-11th-24",
      amount: "0.00504btc",
      success: true,
    },
  ];
  const LogCard: React.FC<{ value: LogsType }> = ({ value }) => {
    return (
      <div className="w-full py-2 flex gap-4 items-start border-b border-solid">
        <div className="flex-shrink-0 flex-grow-0 w-[8%]">
          <BanknoteIcon className="w-full h-full" />
        </div>

        <div className="flex-shrink-0 flex-grow-0 min-w-[30%] max-w-fit font-mons capitalize flex flex-col">
          <p className="font-bold text-xs text-teal-700 uppercase">deposit</p>
          <p className=" font-medium text-xs">{value.date}</p>
        </div>

        <div className="items-end flex-shrink-0 flex-grow-0 w-[55%]  font-mons capitalize flex flex-col">
          <p className="font-bold text-xs">{value.amount}</p>
          <p
            className={`text-xs px-1 rounded-sm  font-semibold text-white ${
              value.success ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {value.success ? "success" : "failed"}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col py-4 px-4 gap-4">
      <div className="flex bg-teal-400"></div>
      {LogsDet.map((item, index) => (
        <LogCard value={item} key={index} />
      ))}
    </div>
  );
};

export default Logs;
