import { FileText } from "lucide-react";

const Logs = () => {
  const LogsCard = () => {
    return (
      <div className="flex md:w-[50%] items-center border border-solid py-4 px-3 shadow-md rounded-sm bg-blue-500">
        <div className="flex-shrink-0 flex-grow-0 flex items-center gap-1 basis-[50%] ">
          <FileText className="text-white" />
          <p className="font-mono font-semibold capitalize text-xs text-white">
            invoice_001
          </p>
        </div>

        <div className="flex-shrink-0 flex-grow-0 flex items-center justify-between basis-[50%]">
          <p className="font-mono font-semibold capitalize text-xs text-white">
            12 apr 2025
          </p>
          <p className="font-mono font-bold capitalize text-xs text-white">
            USD 100
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="px-3 py-3">
      <h1 className="font-mono font-semibold uppercase text-sm mt-5 md:text-center">
        recent fund history
      </h1>

      <div className="w-full flex flex-col mt-7 gap-3  md:items-center">
        <LogsCard />
        <LogsCard />
        <LogsCard />
        <LogsCard />
      </div>
    </div>
  );
};

export default Logs;
