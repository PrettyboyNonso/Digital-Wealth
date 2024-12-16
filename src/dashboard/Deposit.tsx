import LoginContext from "@/context/LoginContext";
import { createPayment, formatNumberWithCommas } from "@/lib/utils";
import { ArrowBigDown, ArrowRight, Copy, Info, Wallet } from "lucide-react";
import { FormEvent, useContext, useState } from "react";

const Deposit = () => {
  const [inputval, setInputval] = useState("0.00");
  const context = useContext(LoginContext);
  const [error, setError] = useState("");
  // const [paymentLink, setPaymentLink] = useState("");

  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { assetState, admin } = context;
  async function AuthenticateWithdrawal(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const event = e.target as HTMLFormElement;
    const input = event.amount.value;
    if (input.trim() !== "") {
      try {
        const orderId = `order_${Date.now()}`;
        const response = await createPayment(input, "USDT", orderId);
        // setPaymentLink(response.result.url);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("You can't have an empty field");
    }
  }

  const AdminDeposit = () => {
    const Deposit = () => {
      return (
        <div className="flex items-center border-b border-solid px-2 py-5 rounded-md ">
          <div className="flex-shrink-0 flex-grow-0 basis-[40%] flex flex-col gap-1">
            <h1 className="font-mons uppercase font-medium text-xs">
              jonathan bleming
            </h1>
            <div className="flex gap-1 items-center text-xs">
              <div className="w-2 h-2 rounded-[50%] bg-green-600"></div>
              <p className="font-medium font-mons capitalize ">authorized</p>
            </div>
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-[30%] flex  justify-end">
            <h1 className="font-mono capitalize text-sm font-bold ">
              <span className="text-green-600">$300</span>
            </h1>
          </div>

          <div className="flex-shrink-0 flex-grow-0 basis-[30%] w-full flex flex-col gap-2">
            <Copy className="self-end w-5 h-5" />
          </div>
        </div>
      );
    };
    return (
      <>
        {/* <h1 className="font-mons font-bold uppercase text-xs mt-3 ml-3">
          deposits
        </h1> */}
        <div className="px-1 py-2">
          <Deposit />
          <Deposit />
          <Deposit />
          <Deposit />
        </div>
      </>
    );
  };
  return (
    <>
      {admin ? (
        <AdminDeposit />
      ) : (
        <div className="w-full h-full py-4 px-4 lg:flex lg:justify-between lg:items-start">
          <div className="lg:w-[50%] lg:border lg:border-solid lg:shadow-xl lg:px-4 lg:py-4 rounded-md">
            <div className="mt-2 flex gap-2 items-center bg-green-500 py-2 px-1 rounded-md">
              <Info className="text-white w-5 h-5" />
              <p className="text-xs font-mons capitalize font-semibold text-white">
                deposits are instant
              </p>
            </div>

            <div className="flex flex-col gap-2 relative mt-5">
              <div className="px-4 py-5 min-h-fit  bg-black rounded-lg">
                <div className="w-full flex justify-between text-white">
                  <p className="uppercase text-gray-400 font-mons font-semibold text-xs">
                    selling
                  </p>
                </div>

                <div className="lg:mt-3 mt-5 w-[100%] flex  justify-between">
                  <div className="flex items-center flex-shrink-0 flex-grow-0 basis-[30%] gap-1">
                    <img
                      src="https://coin-images.coingecko.com/coins/images/325/thumb/tether.png?1696501400"
                      alt=""
                    />
                    <p className="text-white  uppercase font-mons font-semibold text-xs">
                      usdt
                    </p>
                  </div>

                  <div className=" flex-shrink-0 flex-grow-0 basis-[70%]">
                    <p className="text-white  flex justify-end uppercase font-mons font-semibold text-sm">
                      ${formatNumberWithCommas(parseInt(inputval))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute border bg-black opacity-90 px-3 rounded-xl py-2 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <ArrowBigDown className="text-white lg:w-5 lg:h-5" />
              </div>

              <div className="px-4 py-5 min-h-fit bg-black rounded-md">
                <div className="w-full flex justify-between text-white">
                  <p className="uppercase text-gray-400 font-mons font-semibold text-xs">
                    receiving
                  </p>
                </div>

                <div className="mt-5 w-[100%] flex items-center justify-between">
                  <div className="flex items-center flex-shrink-0 flex-grow-0 basis-[30%] gap-2">
                    <Wallet className="text-yellow-500" />
                    <p className="text-white  uppercase font-mons font-semibold text-xs">
                      wallet
                    </p>
                  </div>

                  <div className=" flex-shrink-0 flex-grow-0 basis-[70%]">
                    <p className="text-white flex justify-end uppercase font-mons font-semibold text-sm">
                      ${formatNumberWithCommas(parseInt(inputval))}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-between w-full">
              <p className="font-mons font-medium text-green-500  text-xs uppercase">
                balance
              </p>
              <div className="flex justify-end">
                <p className="font-mons text-xs font-semibold text-gray-500  uppercase lg:text-xs lg:text-black">
                  $0.00
                </p>
              </div>
            </div>

            <form
              className="w-full mt-8 lg:mt-5"
              onSubmit={(e) => AuthenticateWithdrawal(e)}
            >
              <p className="font-mons font-bold text-gray-500   text-xs uppercase">
                enter amount
              </p>
              <input
                type="number"
                placeholder="$0.00"
                name="amount"
                className=" mt-4 w-full font-mons font-bold capitalize text-xs px-2 py-4 border-2 border-teal-500 outline-none rounded-md"
                onChange={(e) => setInputval(e.target.value)}
              />

              <button className="text-xs mt-10 flex justify-center items-center w-full bg-green-500 text-white font-mons capitalize font-bold py-3 rounded-md">
                proceed to payment
              </button>
              <p className="font-mons font-bold text-red-500 mt-1 text-xs ">
                {error}
              </p>
            </form>
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
                          parseInt(
                            value.market_data.current_price.usd.toFixed(1)
                          )
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
                        (
                        {value.market_data.price_change_percentage_24h?.toFixed(
                          1
                        )}
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
      )}
    </>
  );
};

export default Deposit;
