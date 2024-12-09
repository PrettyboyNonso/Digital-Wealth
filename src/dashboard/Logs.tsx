import { FileText } from "lucide-react";

const Logs = () => {
  const LogsCard = () => {
    return (
      <div className="flex items-center mt-7">
        <div className="flex-shrink-0 flex-grow-0 flex items-center gap-1 basis-[50%] ">
          <FileText className="" />
          <p className="font-mono font-semibold capitalize">invoice_001</p>
        </div>
      </div>
    );
  };
  return (
    <div className="px-3 py-3">
      <h1 className="font-mono font-semibold uppercase text-sm">
        fund history
      </h1>

      <div className="w-full flex flex-col ">
        <LogsCard />
      </div>
    </div>
  );
};

export default Logs;
