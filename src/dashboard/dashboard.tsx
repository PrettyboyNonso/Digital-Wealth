import LoginContext from "@/context/LoginContext";
import Select from "react-select";
import {
  cryptoOptions,
  daysOptions,
  formatNumberWithCommas,
  handleChange,
  leverageOptions,
} from "@/lib/utils";
import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUp,
  Bitcoin,
  // Copy,
  PiggyBank,
  Wallet,
  X,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Bell from "./Bell";
import Notification from "./Notification";
// import ChartComponent from "./ChartComponent";

const Dashboard = ({
  openNotification,
  setOpenNotification,
}: {
  openNotification: boolean;
  setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openConnect, setOpenConnect] = useState(false);
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { fetchStockData, assetState, admin } = context;

  useEffect(() => {
    fetchStockData("IBM");
    console.log(localStorage.getItem("accessToken"));
  }, []);

  const WalletPart = () => {
    const [Network, setNetwork] = useState("TRC20");
    return (
      <div className=" w-[90%] fixed top-[40%] z-50 shadow-2xl rounded-md left-[50%] -translate-x-[50%] bg-black border border-teal-600  px-4 py-4">
        <div className="w-full items-center flex justify-between">
          <h2 className="font-mono text-sm font-bold uppercase text-white">
            enter <span className="text-teal-600">USDT</span> deposit address
          </h2>

          <X onClick={() => setOpenConnect(false)} className="text-white" />
        </div>

        <div className="w-full items-center mt-2 flex gap-2  font-mono font-bold text-sm text-white">
          <p
            className={`px-2 py-1 border ${
              Network === "TRC20" ? "border-green-600" : "border-solid"
            }  `}
            onClick={() => setNetwork("TRC20")}
          >
            TRC20
          </p>
          <p
            className={`px-2 py-1 border ${
              Network === "ERC20" ? "border-green-600" : "border-solid"
            }  `}
            onClick={() => setNetwork("ERC20")}
          >
            ERC20
          </p>
        </div>

        <form action="" className="mt-4">
          <input
            type="text"
            placeholder="deposit address"
            className="outline-none border-2 border-white px-2 py-3 w-full font-mono capitalize text-xs shadow-md"
          />

          <button className="mt-6 w-full bg-green-600 py-2 font-mono font-bold text-sm capitalize rounded-md shadow-sm">
            add address
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      {admin ? (
        <div className=""></div>
      ) : !openNotification ? (
        <div className="w-full h-full py-4 px-4 lg:flex lg:justify-between lg:items-start relative">
          {openConnect && <WalletPart />}
          <div className="lg:w-[50%] lg:border lg:border-solid lg:shadow-xl lg:px-4 lg:py-4 rounded-md">
            <div className="flex justify-between items-center">
              <h1 className="font-mons font-semibold text-xs capitalize">
                welcome, Apoloski!
              </h1>

              <Bell setOpenNotification={setOpenNotification} />
            </div>

            <div className="w-full min-h-32 px-4 py-4 border border-solid mt-5 lg:mt-3 shadow-lg bg-black rounded-md lg:py-6 lg:min-h-fit">
              <div className="w-full flex justify-between">
                <p className="capitalize font-semibold font-mons text-gray-300 text-[13px] lg:text-xs">
                  deposits
                </p>
                {/* <Copy className="text-white cursor-pointer lg:w-4 lg:h-4 w-5 h-5" /> */}
              </div>

              <h1 className=" lg:mt-1 mt-2 lg:text-lg text-[15px] font-semibold font-mons capitalize text-white">
                $0.00
              </h1>
              <div className="flex mt-3 text-white gap-3 font-mons font-medium text-xs items-center">
                <div className="flex items-center bg-greencustom px-3 py-1 gap-1 rounded-sm">
                  <ArrowUp className="w-4 h-4" /> <span className="">0.00</span>
                </div>
                <p className="font-mons text-gray-300 font-semibold  text-xs">
                  Compared to market data
                </p>
              </div>
            </div>

            <div className="lg:mt-3 mt-5 w-full flex justify-between px-3 lg:hidden">
              <div className="flex flex-col items-center gap-1">
                <NavLink to="/dashboard/deposit">
                  <div className="bg-black flex flex-col md:px-6 rounded-lg md:py-3 px-4 py-2 text-white">
                    <Bitcoin className="w-5 h-5 lg:w-4 lg:h-4" />
                  </div>
                </NavLink>

                <p className="font-mons capitalize text-gray-600 text-xs lg:text-xs font-bold">
                  fund
                </p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <NavLink to="/dashboard/withdraw">
                  <div className="bg-green-500 flex flex-col md:px-6 rounded-lg md:py-3 px-4 py-2 text-white">
                    <ArrowLeftRight className="w-5 h-5 lg:w-4 lg:h-4" />
                  </div>
                </NavLink>

                <p className="font-mons capitalize text-gray-600 text-xs lg:text-xs font-bold">
                  withdraw
                </p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <NavLink to="/dashboard/loan">
                  <div className="bg-teal-600 flex flex-col md:px-6 rounded-lg md:py-3 px-4 py-2 text-white">
                    <PiggyBank className="w-5 h-5 lg:w-4 lg:h-4" />
                  </div>
                </NavLink>

                <p className="font-mons capitalize text-gray-600 text-xs lg:text-xs font-bold">
                  borrow
                </p>
              </div>
            </div>

            {/* <div className="mt-10 w-full lg:hidden">
              <ChartComponent />
            </div> */}

            <div className="bg-blue-600 py-4 min-h-fit rounded-md flex-shrink-0 lg:hidden flex-grow-0 basis-[48%] border border-solid  flex flex-col items-center mt-8">
              <Wallet className="text-white w-5 h-5" />
              <h1 className="text-white font-mono font-semibold capitalize lg:text-base text-sm">
                connect wallet
              </h1>
              <p className="text-black mt-1 text-xs font-mono font-bold capitalize">
                earn daily 250 for connecting your wallet
              </p>

              <button
                className="mt-6 bg-white lg:px-5 py-2 px-4 capitalize font-mono text-xs rounded-md  font-bold flex gap-1 items-center"
                onClick={() => setOpenConnect(true)}
              >
                connect now
                <ArrowRight />
              </button>
            </div>

            <div className="mt-12 lg:mt-16">
              {/* <h2 className="text-[16px] font-mons capitalize font-bold">assets</h2> */}
              <form action="" className="w-full mt-4">
                <Select
                  options={cryptoOptions}
                  defaultValue={cryptoOptions[0]}
                  onChange={handleChange}
                  className="w-full font-mons font-semibold text-xs lg:text-xs"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "2px solid",
                      padding: "3px 2px",
                    }),
                  }}
                />
                <Select
                  options={leverageOptions}
                  defaultValue={leverageOptions[0]}
                  onChange={handleChange}
                  className="mt-3 w-full font-mons font-semibold text-xs lg:text-xs"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "2px solid",
                      padding: "3px 2px",
                    }),
                  }}
                />
                <input
                  type="number"
                  placeholder="Amount to invest"
                  className="mt-3 border-2 border-solid w-full py-3 font-mons font-semibold text-xs lg:text-xs outline-none px-2"
                />

                <Select
                  options={daysOptions}
                  defaultValue={daysOptions[0]}
                  onChange={handleChange}
                  className="mt-3 w-full font-mons font-semibold text-xs lg:text-xs"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "2px solid",
                      padding: "3px 2px",
                    }),
                  }}
                />
                <div className="w-full justify-between flex mt-5 items-center">
                  <button className="flex-shrink-0 flex-grow-0 basis-[48%] bg-red-600 py-2 rounded-sm capitalize text-white font-mons font-semibold text-xs">
                    sell
                  </button>
                  <button className="text-xs flex-shrink-0 flex-grow-0 basis-[48%] bg-green-600 py-2 rounded-sm capitalize text-white font-mons font-semibold ">
                    buy
                  </button>
                </div>
              </form>
            </div>
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
              <p className="text-gray-300 text-xs font-mono font-bold capitalize ">
                earn daily 250 for connecting your wallet
              </p>

              <button className="mt-6 bg-white px-5 py-2 capitalize font-mono text-xs rounded-md  font-bold flex gap-1 items-center">
                connect now
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Notification setOpenNotification={setOpenNotification} />
      )}
    </>
  );
};

export default Dashboard;
