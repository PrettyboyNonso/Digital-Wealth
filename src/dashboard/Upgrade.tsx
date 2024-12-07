import LoginContext from "@/context/LoginContext";
import { formatNumberWithCommas } from "@/lib/utils";
import { ArrowRight, Check, Wallet } from "lucide-react";
import { useContext } from "react";

const Upgrade = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { assetState } = context;

  return (
    <div className="w-full h-full py-4 lg:py-0 px-4 lg:flex lg:justify-between lg:items-start">
      <div className="flex flex-col w-full gap-14 mt-3 lg:w-[50%] lg:px-4 lg:py-4">
        <div className="w-full px-2 py-2 min-h-52 lg:border lg:border-solid lg:shadow-xl lg:rounded-md lg:py-5">
          <h2 className="w-full text-center font-mono text-lg font-semibold text-blue-600 uppercase lg:text-xl">
            1.5% roi
          </h2>
          <h2 className="lg:text-xl w-full text-center font-mono text-lg font-bold mt-1 text-blue-600 capitalize border-b border-solid pb-3">
            beginners plan
          </h2>

          <div className="flex flex-col mt-5 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                minimum amount: $100
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                maximum amount: $25,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                1.5% daily for 60 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                no charges amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                duration: 60 days
              </p>
            </div>

            <button className="text-sm font-mono font-bold uppercase mt-4 bg-blue-600 text-white py-3 rounded-sm">
              join plan
            </button>
          </div>
        </div>

        <div className="w-full px-2 py-2 min-h-52 lg:border lg:border-solid lg:shadow-xl lg:rounded-md lg:py-5">
          <h2 className="lg:text-xl w-full text-center font-mono text-lg font-semibold text-blue-600 uppercase">
            2.5% roi
          </h2>
          <h2 className="lg:text-xl w-full text-center font-mono text-lg font-bold mt-1 text-blue-600 capitalize border-b border-solid pb-3">
            standard plan
          </h2>

          <div className="flex flex-col mt-5 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                minimum amount: $25,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                maximum amount: $100,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                2.5% daily for 60 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                no charges amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                duration: 60 days
              </p>
            </div>

            <button className="text-sm font-mono font-bold uppercase mt-4 bg-blue-600 text-white py-3 rounded-sm">
              join plan
            </button>
          </div>
        </div>

        <div className="w-full px-2 py-2 min-h-52 lg:border lg:border-solid lg:shadow-xl lg:rounded-md lg:py-5">
          <h2 className="lg:text-xl w-full text-center font-mono text-lg font-semibold text-blue-600 uppercase">
            3.5% roi
          </h2>
          <h2 className="lg:text-xl w-full text-center font-mono text-lg font-bold mt-1 text-blue-600 capitalize border-b border-solid pb-3">
            Professional plan
          </h2>

          <div className="flex flex-col mt-5 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                minimum amount: $100,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                maximum amount: $500,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                3.5% daily for 60 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                no charges amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize text-xs">
                duration: 60 days
              </p>
            </div>

            <button className="text-sm font-mono font-bold uppercase mt-4 bg-blue-600 text-white py-3 rounded-sm">
              join plan
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-between w-[38%] top-7  gap-3 fixed right-2">
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

export default Upgrade;
