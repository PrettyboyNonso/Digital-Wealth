import LoginContext from "@/context/LoginContext";
import { CryptoDetails, formatNumberWithCommas } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useContext } from "react";

const Market = () => {
  const context = useContext(LoginContext);
  if (!context) {
    return;
  }
  const { assetState } = context;
  const CryptoCard = ({ value }: { value: CryptoDetails }) => {
    return (
      <div className="flex flex-col items-center py-4 flex-shrink-0 flex-grow-0 md:basis-[40%] lg:basis-[20%] basis-[90%] min-h-32 border-2 border-solid shadow-md rounded-md snap-start">
        <div>
          <img src={value?.image.thumb} alt="" />
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className=" mt-2 md:mt-4 capitalize font-semibold font-mons">
            {value.name}
          </h2>
          <h2 className="font-semibold text-sm font-mons mt-1">
            $
            {formatNumberWithCommas(
              parseInt(value.market_data.current_price.usd.toFixed(1))
            )}
          </h2>
        </div>

        <div
          className={`mt-2 flex items-center text-white px-1 text-xs font-mons font-bold  rounded-sm ${
            (value.market_data.price_change_24h_in_currency.usd * 10) / 10 > 0
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {(value.market_data.price_change_24h_in_currency.usd * 10) / 10 >
          0 ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
          <h3>{value.market_data.price_change_percentage_24h?.toFixed(1)}%</h3>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white shadow-2xl  px-4 md:px-8 py-8 md:min-h-64 rounded-lg">
      <p className="text-[11px] md:text-xs text-orange-600 capitalize font-mons font-semibold">
        vast market
      </p>
      <h1 className="text-sm md:text-2xl max-w-[80%] lg:max-w-[35%] font-bold font-mons mt-2">
        Real trading experience, without the risk
      </h1>
      <div className="mt-8 w-full flex gap-3 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
        {assetState.map((value, index) => (
          <CryptoCard value={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Market;
