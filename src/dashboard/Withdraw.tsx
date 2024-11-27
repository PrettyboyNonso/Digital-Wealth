import { BellIcon, Info } from "lucide-react";

const Withdraw = () => {
  return (
    <div className="w-full h-full py-4 px-4">
      <div className="flex justify-between items-center">
        <h1 className="font-mons font-semibold text-xs capitalize">
          welcome, Apoloski!
        </h1>

        <BellIcon className="text-gray-700 w-5 h-5" />
      </div>

      <div className="mt-4 flex gap-1 items-center bg-red-500 py-2 rounded-sm px-1">
        <Info className="text-white w-5 h-5" />
        <p className="text-xs font-mons capitalize font-semibold text-white">
          withdrawals are processed within 24 hours
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap mt-8">
        <div className="flex flex-shrink-0 flex-grow-0 bg-green-600 text-white rounded-sm basis-[30%] justify-center py-2">
          <p className="font-mono font-bold uppercase">btc</p>
        </div>
        <div className="flex flex-shrink-0 flex-grow-0 bg-gray-600 text-white rounded-sm basis-[30%] justify-center py-2">
          <p className="font-mono font-bold uppercase">bnb</p>
        </div>
        <div className="flex flex-shrink-0 flex-grow-0 bg-green-800 text-white rounded-sm basis-[30%] justify-center py-2">
          <p className="font-mono font-bold uppercase">trx</p>
        </div>
        <div className="flex flex-shrink-0 flex-grow-0 bg-teal-600 text-white rounded-sm basis-[30%] justify-center py-2">
          <p className="font-mono font-bold uppercase">eth</p>
        </div>
        <div className="flex flex-shrink-0 flex-grow-0 bg-black text-white rounded-sm basis-[30%] justify-center py-2">
          <p className="font-mono font-bold uppercase">usdt</p>
        </div>
      </div>
      <div className="mt-12 w-full">
        <p className=" font-mons font-bold text-sm text-gray-600 capitalize">
          withdrawal method
        </p>
        <select
          name=""
          id=""
          className="border rounded-sm border-black outline-none w-full py-3 capitalize px-2 mt-2 font-mono font-medium text-sm text-gray-600"
        >
          <option value="">wallet</option>
        </select>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter wallet address"
          className="border outline-none border-black rounded-sm w-full py-3 capitalize px-2 mt-2 font-mono font-medium text-sm text-gray-600"
        />
      </div>
      <div className="mt-6">
        <input
          type="number"
          placeholder="withdrawal amount"
          className="border outline-none border-black rounded-sm w-full py-3 capitalize px-2 mt-2 font-mono font-medium text-sm text-gray-600"
        />
      </div>

      <button className="w-full flex justify-center bg-green-500 mt-8 py-3 font-mono capitalize text-white font-semibold rounded-sm">
        initiate withdrawal
      </button>
    </div>
  );
};

export default Withdraw;
