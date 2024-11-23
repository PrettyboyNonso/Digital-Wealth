import { ArrowUpRight } from "lucide-react";

const Plans = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <div className="w-full justify-center flex flex-col items-center gap-2">
        <p className="font-mons capitalize font-bold text-xs text-orange-700">
          our awesome plans
        </p>
        <h1 className="font-mons capitalize font-semibold">
          we have helped thousands individual with our plans
        </h1>
        <p className="font-mons capitalize font-semibold text-xs text-gray-600">
          hundreds of all sizes and accross all industries has made great
          improvements with us
        </p>
      </div>

      <div className="">
        <div className="flex w-full justify-center">
          <p className="font-medium font-mons  text-sm">Choose a plan:</p>
        </div>

        <div className="flex px-56 mt-6 justify-between">
          <div className="px-4 py-4 flex-shrink-0 flex-grow-0 basis-[48%] border-2 border-solid min-h-48 rounded-md bg-teal-100 shadow-md">
            <h1 className="uppercase text-sm font-bold font-mons ">beginner</h1>
            <ul className="mt-4 px-2 flex flex-col gap-2">
              <li className="text-xs font-mons capitalize font-medium list-disc">
                4.5%/trade
              </li>
              <li className="text-xs font-mons capitalize font-medium list-disc">
                Principal return on maturity
              </li>
              <li className="text-xs font-mons capitalize font-medium list-disc">
                Instant Withdrawal
              </li>
              <li className="text-xs font-mons capitalize font-medium list-disc">
                Professional Charts
              </li>
              <li className="text-xs font-mons capitalize font-medium list-disc">
                24/7 Support
              </li>
            </ul>

            <div className="w-full justify-between mt-4 flex items-center">
              <h2 className="font-mons capitalize font-bold text-[13px]">
                $500 - 25,000
              </h2>
              <ArrowUpRight className="text-gray-500" />
            </div>
          </div>

          <div className="bg-blue-900 px-4 py-4 flex-shrink-0 flex-grow-0 basis-[48%] border border-solid min-h-48 rounded-md">
            <h1 className="uppercase text-sm font-bold font-mons text-white">
              pro
            </h1>
            <ul className="mt-4 px-2 flex flex-col gap-2 text-white">
              <li className="text-xs font-mons capitalize font-medium list-disc">
                20.5%/trade
              </li>
              <li className="text-xs font-mons capitalize font-medium list-disc">
                Higher returns on investments
              </li>
              <li className="text-xs font-mons capitalize font-medium list-disc">
                Instant priority withdrawals
              </li>
              <li className="text-xs font-mons capitalize font-medium list-disc">
                Advanced analytics and charting tools
              </li>

              <li className="text-xs font-mons capitalize font-medium list-disc">
                Access to exclusive investment opportunities
              </li>
            </ul>
            <div className="w-full justify-between mt-4 flex items-center text-gray-100">
              <h2 className="font-mons capitalize font-bold text-[13px]">
                $25,000 - 100,000
              </h2>
              <ArrowUpRight className="text-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
