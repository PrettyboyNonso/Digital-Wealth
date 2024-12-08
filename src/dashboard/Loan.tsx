import LoginContext from "@/context/LoginContext";
import {
  formatNumberWithCommas,
  handleChange,
  loanDurationOptions,
  loanFacilityOptions,
} from "@/lib/utils";
import { ArrowRight, Wallet } from "lucide-react";
import { useContext } from "react";
import Select from "react-select";
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
          <h2 className="text-center font-mono text-xs lg:text-sm capitalize font-bold  w-full mt-2">
            loan request application
          </h2>

          <form action="" className="w-full mt-7 flex flex-col gap-8">
            <div className="w-full">
              <p className="font-mono font-bold text-xs">Loan Amount (USD)</p>
              <input
                type="number"
                placeholder="Loan Amount"
                className="text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              />
            </div>
            <div className="w-full">
              <p className="font-mono font-bold text-xs">
                Select Loan Facility
              </p>
              <Select
                options={loanFacilityOptions}
                defaultValue={loanFacilityOptions[0]} // Default to the "Personal Loan" label
                onChange={handleChange}
                className="w-full font-mons font-medium text-xs lg:text-xs mt-3"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid",
                    padding: "3px 2px",
                  }),
                }}
              />
            </div>

            <div className="w-full">
              <p className="font-mono font-bold text-xs">Select Duration</p>
              <Select
                options={loanDurationOptions}
                defaultValue={loanDurationOptions[0]}
                onChange={handleChange}
                className="w-full font-mons font-medium text-xs lg:text-xs mt-3"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid",
                    padding: "3px 2px",
                  }),
                }}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                className="font-mono text-xs w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Purpose For Loan..."
              ></textarea>
            </div>

            <div className="w-full">
              <p className="font-mono font-bold text-xs">
                Monthly Income (USD)
              </p>
              <input
                type="number"
                placeholder="Enter Monthly Income"
                className="text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              />
            </div>

            <div className="flex justify-center">
              <button className="w-[90%] text-sm  bg-green-600 rounded-sm text-white font-mono capitalize py-2 lg:w-full">
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
