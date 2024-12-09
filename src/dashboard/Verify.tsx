import { CloudUpload } from "lucide-react";

const Verify = () => {
  return (
    <div className="flex flex-col px-8 py-4 mt-5  md:items-center w-full ">
      <div className="w-full h-40 md:w-[50%]">
        <img src="/Id.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full flex flex-col gap-1 mt-5 md:w-[50%] ">
        <h1 className="text-lg font-bold font-mons uppercase">
          upload proof of your identity
        </h1>
        <p className="text-xs font-mons font-semibold">
          Please submit an image of the front and back of your valid id card
        </p>
        <div className="mt-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center justify-center">
          {/* Front of ID */}
          <div className="w-64 h-36 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:border-blue-500 transition">
            <input type="file" id="front-id" className="hidden" />
            <label
              htmlFor="front-id"
              className="flex flex-col items-center justify-center space-y-2"
            >
              <CloudUpload />
              <span className="text-gray-500 font-medium">Front of ID</span>
            </label>
          </div>

          {/* Back of ID */}
          <div className="w-64 h-36 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:border-blue-500 transition">
            <input type="file" id="back-id" className="hidden" />
            <label
              htmlFor="back-id"
              className="flex flex-col items-center justify-center space-y-2"
            >
              <CloudUpload />
              <span className="text-gray-500 font-medium">Back of ID</span>
            </label>
          </div>
        </div>

        <button className=" mt-5 bg-blue-600 py-3 font-mons text-xs uppercase text-white font-semibold rounded-sm">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verify;
