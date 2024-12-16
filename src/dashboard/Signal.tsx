import React, { useState } from "react";

const SignalPage = () => {
  const [clickedSignal, setClickedSignal] = useState(false);
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

  const AreUSure = () => {
    return (
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] bg-teal-500 z-[60] w-[90%] px-2 py-4 rounded-md">
        <h1 className="text-center w-full capitalize font-mons text-xs font-bold">
          you are about to pay <span className="text-white">$1300</span> for{" "}
          <span className="text-white">momentum signals</span>
        </h1>

        <div className="w-full flex justify-between px-3 mt-4 items-center">
          <button
            className="text-white font-bold flex-shrink-0 flex-grow-0 basis-[45%] py-2 rounded-md  capitalize font-mons text-xs bg-red-600"
            onClick={() => setClickedSignal(false)}
          >
            cancel
          </button>
          <button className="flex-shrink-0 flex-grow-0 basis-[45%] py-2 rounded-md  capitalize font-mons font-bold text-xs bg-green-600">
            pay
          </button>
        </div>
      </div>
    );
  };
  const Signals: React.FC<{ value: SignalType }> = ({ value }) => {
    return (
      <div className="relative w-full flex flex-col border border-solid md:w-[50%] ">
        {clickedSignal && <AreUSure />}
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

        <button
          className="bg-blue-700 py-2 text-sm text-white font-mono font-bold capitalize"
          onClick={() => setClickedSignal(true)}
        >
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
