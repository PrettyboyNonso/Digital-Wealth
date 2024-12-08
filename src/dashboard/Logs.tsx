import { BanknoteIcon } from "lucide-react";

const Logs = () => {
  const LogCard = () => {
    return (
      <div className="w-full py-2 flex gap-4 items-start">
        <div className="flex-shrink-0 flex-grow-0 w-[8%]">
          <BanknoteIcon className="w-full h-full" />
        </div>

        <div className="flex-shrink-0 flex-grow-0 min-w-[30%] max-w-fit font-mons capitalize flex flex-col">
          <p className="font-bold text-xs">deposit</p>
          <p className=" font-medium text-xs">tue-8th-24</p>
        </div>

        <div className="items-end flex-shrink-0 flex-grow-0 w-[55%]  font-mons capitalize flex flex-col">
          <p className="font-bold text-xs">0.00034btc</p>
          <p className="text-xs px-1 rounded-sm bg-green-600 font-bold text-white">
            success
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col py-4 px-4 gap-4">
      <LogCard />
      <LogCard />
      <LogCard />
    </div>
  );
};

export default Logs;
