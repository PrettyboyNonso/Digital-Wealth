import React from "react";

const SignalPage = () => {
  interface SignalType {
    name: string;
    amount: string;
    percent: string;
  }
  const SignalObj = [
    {
      name: " momentum signals",
      amount: "$1300",
      percent: "63%",
    },
    {
      name: " breakout signals",
      amount: "$3000",
      percent: "68.7%",
    },
    {
      name: " buying oversold",
      amount: "$3800",
      percent: "70%",
    },
  ];
  const Signals: React.FC<{ value: SignalType }> = ({ value }) => {
    return (
      <div className="w-full flex flex-col border border-solid md:w-[50%] ">
        <div className="w-full bg-gray-100 py-2 flex justify-center rounded-md">
          <h1 className="font-mons capitalize text-blue-400 font-semibold">
            {value.name}
          </h1>
        </div>

        <div className="w-full py-2 flex justify-center rounded-sm">
          <h2 className="font-mono capitalize  font-semibold">
            signals price: {value.amount}
          </h2>
        </div>

        <div className="w-full py-3 flex justify-center rounded-sm border-t border-solid ">
          <p className="font-mons capitalize text-xs font-medium">
            percentage: {value.percent}
          </p>
        </div>

        <button className="bg-blue-700 py-2 text-sm text-white font-mono font-bold capitalize">
          subscribe now
        </button>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col gap-5 items-start px-4 py-4 md:items-center">
      {SignalObj.map((item, index) => (
        <Signals value={item} key={index} />
      ))}
    </div>
  );
};

export default SignalPage;
