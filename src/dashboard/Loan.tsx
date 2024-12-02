import LoginContext from "@/context/LoginContext";
import { formatNumberWithCommas } from "@/lib/utils";
import { ArrowRight, Wallet } from "lucide-react";
import { useContext } from "react";

const Loan = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { assetState } = context;
  return (
    <div className="w-full h-full py-4 px-4 lg:flex lg:justify-between lg:items-start">
      <div className="lg:w-[50%] lg:border lg:border-solid lg:shadow-xl lg:px-4 lg:py-4 rounded-md">
        <div className="w-full">
          <h2 className="text-center font-mono text-sm capitalize font-bold  w-full mt-2">
            loan request application
          </h2>

          <form action="" className="w-full mt-7 flex flex-col gap-8">
            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">
                Loan Amount (USD)
              </p>
              <input
                type="number"
                placeholder="Loan Amount"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              />
            </div>
            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">
                Select Loan Facility
              </p>
              <select
                id="loan-facility"
                name="loanFacility"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              >
                <option value="personal-loan">Personal Loan</option>
                <option value="home-loan">Home Loan</option>
                <option value="car-loan">Car Loan</option>
                <option value="education-loan">Education Loan</option>
                <option value="business-loan">Business Loan</option>
              </select>
            </div>

            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">Select Duration</p>
              <select
                id="loan-duration"
                name="loanDuration"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              >
                <option value="1-month">1 Month</option>
                <option value="3-months">3 Months</option>
                <option value="6-months">6 Months</option>
                <option value="9-months">9 Months</option>
                <option value="12-months">12 Months</option>
              </select>
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                className="font-mono lg:text-xs w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Purpose For Loan..."
              ></textarea>
            </div>

            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">
                Monthly Income (USD)
              </p>
              <input
                type="number"
                placeholder="Enter Monthly Income"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              />
            </div>

            <div className="flex justify-center">
              <button className="w-[90%] lg:text-sm  bg-green-600 text-sm rounded-sm text-white font-mono capitalize py-2 lg:w-full">
                submit request
              </button>
            </div>
          </form>
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

export default Loan;
