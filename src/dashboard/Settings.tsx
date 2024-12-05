import { Calendar, Mail, Verified } from "lucide-react";

const Settings = () => {
  return (
    <div className="px-4 py-4 ">
      <h2 className="font-mono text-sm font-bold capitalize">David Apoloski</h2>

      <div className="mt-5 flex items-center gap-4">
        <div className="w-14 h-14 rounded-[50%] border-4 border-solid bg-orange-600 flex justify-center items-center uppercase text-white font-mono text-xl">
          <p>d.a</p>
        </div>

        <div>
          <div className="flex gap-2 items-center">
            <h3 className="capitalize font-bold">david apoloski</h3>
            <Verified className="text-green-600 w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 " />
          <p className="font-mono text-xs font-semibold capitalize text-gray-400">
            joined march 2023
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 " />
          <p className="font-mono text-xs font-semibold text-gray-400">
            david001@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
