import {
  ArrowLeftRight,
  ArrowUp,
  BellIcon,
  Bitcoin,
  Copy,
  PiggyBank,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full h-full py-4 px-4 ">
      <div className="flex justify-between items-center">
        <h1 className="font-mons font-semibold text-xs capitalize">
          welcome, Apoloski!
        </h1>

        <BellIcon className="text-gray-700" />
      </div>

      <div className="w-full min-h-32 px-4 py-4 border border-solid mt-5 shadow-lg bg-black rounded-md">
        <div className="w-full flex justify-between">
          <p className="capitalize font-semibold font-mons text-gray-300 text-[14px]">
            deposits
          </p>
          <Copy className="text-white cursor-pointer" />
        </div>

        <h1 className="mt-2 text-lg font-semibold font-mons capitalize text-white">
          $0.00
        </h1>
        <div className="flex mt-3 text-white gap-3 font-mons font-medium text-xs items-center">
          <div className="flex items-center bg-greencustom px-3 py-1 gap-1 rounded-sm">
            <ArrowUp className="w-4 h-4" /> <span className="">0.00</span>
          </div>
          <p className="font-mons text-gray-300 font-semibold">
            Compared to market data
          </p>
        </div>
      </div>
      <div className="mt-5 w-full flex justify-between px-3">
        <div className="flex flex-col items-center gap-1">
          <NavLink to="/dashboard/deposit">
            <div className="bg-black flex flex-col px-6 rounded-lg py-3 text-white">
              <Bitcoin className="w-5 h-5" />
            </div>
          </NavLink>

          <p className="font-mons font-semibold capitalize text-gray-600 text-[13px]">
            fund
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <NavLink to="/dashboard/withdraw">
            <div className="bg-green-500 px-6 rounded-lg py-3 text-white">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
          </NavLink>

          <p className="font-mons font-semibold capitalize text-gray-600 text-[13px]">
            withdraw
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <NavLink to="/dashboard/loan">
            <div className="bg-teal-600 px-6 rounded-lg py-3 text-white">
              <PiggyBank className="w-5 h-5" />
            </div>
          </NavLink>

          <p className="font-mons font-semibold capitalize text-gray-600 text-[13px]">
            borrow
          </p>
        </div>
      </div>

      <div className="mt-12">
        {/* <h2 className="text-[16px] font-mons capitalize font-bold">assets</h2> */}
        <form action="" className="w-full mt-4">
          <select
            name="crypto-pair"
            id="crypto-pair"
            className=" border-2 border-solid w-full py-3 font-mons font-semibold text-[13px] outline-none px-2"
          >
            <option value="">Crypto Pair</option>
            <option value="usdt-tron">USDT/TRON</option>
            <option value="btc-eth">BTC/ETH</option>
            <option value="eth-usdt">ETH/USDT</option>
            <option value="bnb-btc">BNB/BTC</option>
            <option value="ltc-usdt">LTC/USDT</option>
            <option value="doge-btc">DOGE/BTC</option>
            <option value="sol-eth">SOL/ETH</option>
            <option value="xrp-usdt">XRP/USDT</option>
            <option value="ada-btc">ADA/BTC</option>
            <option value="dot-usdt">DOT/USDT</option>
          </select>

          <select
            name="leverage"
            id="leverage"
            className="mt-3 border-2 border-solid w-full py-3 font-mons font-semibold text-[13px] outline-none px-2"
          >
            <option value=""> Leverage</option>
            <option value="1x">1x</option>
            <option value="2x">2x</option>
            <option value="5x">5x</option>
            <option value="10x">10x</option>
            <option value="20x">20x</option>
            <option value="50x">50x</option>
            <option value="100x">100x</option>
          </select>

          <input
            type="number"
            placeholder="Amount to invest"
            className="mt-3 border-2 border-solid w-full py-3 font-mons font-semibold text-[13px] outline-none px-2"
          />

          <select
            name="days"
            id="days"
            className="mt-3 border-2 border-solid w-full py-3 font-mons font-semibold text-[13px] outline-none px-2"
          >
            <option value=""> Day</option>
            <option value="1">1 Day</option>
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
            <option value="6">6 Days</option>
            <option value="7">7 Days</option>
          </select>

          <div className="w-full justify-between flex mt-5 items-center">
            <button className="flex-shrink-0 flex-grow-0 basis-[48%] bg-red-600 py-2 rounded-sm capitalize text-white font-mons font-semibold text-[14px]">
              sell
            </button>
            <button className="flex-shrink-0 flex-grow-0 basis-[48%] bg-green-600 py-2 rounded-sm capitalize text-white font-mons font-semibold text-[14px]">
              buy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
