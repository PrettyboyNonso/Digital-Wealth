import LoginContext from "@/context/LoginContext";
import { formatNumberWithCommas } from "@/lib/utils";
import { ArrowRight, BellIcon, Info, Wallet } from "lucide-react";
import { useContext } from "react";

const Withdraw = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { assetState } = context;
  return (
    <div className="w-full h-full py-4 px-4 lg:flex lg:justify-between lg:items-start">
      <div className="lg:w-[50%] lg:border lg:border-solid lg:shadow-xl lg:px-4 lg:py-4 rounded-md">
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
          <p className=" font-mons font-bold text-sm text-gray-600 capitalize lg:text-xs">
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

        <button className="lg:text-sm w-full flex justify-center bg-green-500 mt-8 py-3 font-mono capitalize text-white font-semibold rounded-sm">
          initiate withdrawal
        </button>
      </div>

      <div className="hidden lg:flex flex-col justify-between w-[48%]  gap-3">
        <div className="flex-shrink-0 flex-grow-0 basis-[48%] border border-solid min-h-36 max-h-fit rounded-md bg-black px-4 py-4">
          <div className="flex flex-col gap-2">
            {assetState.slice(0, 4).map((value, index) => (
              <div className="flex justify-between w-full ">
                <div className="flex gap-2 items-center" key={index}>
                  <img src={value.image.thumb} alt="" />
                  <div>
                    <h1 className="font-mono uppercase font-semibold text-white">
                      {value.symbol}
                    </h1>
                    <h2 className="font-semibold text-gray-400 font-mono capitalize text-sm">
                      {value.name}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <h1 className="font-mono font-semibold text-sm text-white">
                    $
                    {formatNumberWithCommas(
                      parseInt(value.market_data.current_price.usd.toFixed(1))
                    )}
                  </h1>
                  <p
                    className={`font-mono font-semibold text-sm  ${
                      (value.market_data.price_change_24h_in_currency.usd *
                        10) /
                        10 >
                      0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    ({value.market_data.price_change_percentage_24h?.toFixed(1)}
                    %)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-600 py-4 min-h-48 rounded-md flex-shrink-0 flex-grow-0 basis-[48%] border border-solid rounde flex flex-col items-center">
          <Wallet className="text-white" />
          <h1 className="text-white font-mono font-semibold capitalize">
            connect wallet
          </h1>
          <p className="text-gray-700 text-xs font-mono font-bold capitalize ">
            earn daily 250 for connecting your wallet
          </p>

          <button className="mt-6 bg-white px-5 py-2 capitalize font-mono text-xs rounded-md  font-bold flex gap-1 items-center">
            connect now
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
