import { ArrowUpDown, BellIcon, Info } from "lucide-react";

const Deposit = () => {
  return (
    <div className=" py-4 px-4 w-full h-dvh">
      <div className="flex justify-between items-center">
        <h1 className="font-mons font-semibold text-xs capitalize">
          welcome, Apoloski!
        </h1>

        <BellIcon className="text-gray-700" />
      </div>

      <div className="mt-2 flex gap-2 items-center">
        <Info className="text-green-500 w-5 h-5" />
        <p className="text-xs font-mons capitalize font-semibold text-green-500">
          deposits are instant
        </p>
      </div>

      <div className="flex flex-col gap-2 relative mt-5">
        <div className="px-4 py-5 min-h-fit  bg-black rounded-lg">
          <div className="w-full flex justify-between text-white">
            <p className="uppercase text-gray-400 font-mons font-semibold text-sm">
              selling
            </p>
          </div>

          <div className="mt-5 w-[100%] flex  justify-between">
            <div className="flex items-center flex-shrink-0 flex-grow-0 basis-[30%] gap-1">
              <img
                src="https://coin-images.coingecko.com/coins/images/325/thumb/tether.png?1696501400"
                alt=""
              />
              <p className="text-white text-sm uppercase font-mons font-semibold">
                usdt
              </p>
            </div>

            <div className=" flex-shrink-0 flex-grow-0 basis-[70%]">
              <p className="text-white text-lg flex justify-end uppercase font-mons font-semibold ">
                $0.00
              </p>
            </div>
          </div>
        </div>

        <div className="absolute border bg-black opacity-90 px-3 rounded-xl py-2 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <ArrowUpDown className="text-white" />
        </div>

        <div className="px-4 py-5 min-h-fit bg-black rounded-md">
          <div className="w-full flex justify-between text-white">
            <p className="uppercase text-gray-400 font-mons font-semibold text-sm">
              buying
            </p>
          </div>

          <div className="mt-5 w-[100%] flex  justify-between">
            <div className="flex items-center flex-shrink-0 flex-grow-0 basis-[30%] gap-1">
              <img
                src="https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400"
                alt=""
              />
              <p className="text-white text-sm uppercase font-mons font-semibold">
                btc
              </p>
            </div>

            <div className=" flex-shrink-0 flex-grow-0 basis-[70%]">
              <p className="text-white text-lg flex justify-end uppercase font-mons font-semibold ">
                0.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-between w-full">
        <p className="font-mons font-medium text-green-500 capitalize">rate</p>
        <div className="flex justify-end">
          <p className="font-mons font-semibold text-gray-500 capitalize">
            1 btc = $91,841.59
          </p>
        </div>
      </div>

      <form className="w-full mt-8">
        <p className="font-mons font-bold text-gray-500 capitalize text-sm">
          enter amout
        </p>
        <input
          type="number"
          placeholder="$0.00"
          className=" mt-4 w-full font-mons font-bold capitalize text-sm px-2 py-4 border-2 border-teal-500 outline-none rounded-md"
        />

        <button className="mt-10 flex justify-center items-center w-full bg-green-500 text-white font-mons text-sm capitalize font-bold py-3 rounded-md">
          proceed to payment
        </button>
      </form>
    </div>
  );
};

export default Deposit;
