import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CopyTrading = () => {
  const [clickedCopy, setClickedCopy] = useState(false);
  const AreUSure = () => {
    return (
      <div className="md:w-[30%] fixed top-[50%] left-[50%] -translate-x-[50%] bg-teal-500 z-[60] w-[90%] px-2 py-4 rounded-md">
        <h1 className="text-center w-full capitalize font-mons text-xs font-bold">
          are you sure you want to copy this trader?
        </h1>

        <div className="w-full flex justify-between px-3 mt-4 items-center">
          <button
            className="text-white font-bold flex-shrink-0 flex-grow-0 basis-[45%] py-2 rounded-md  capitalize font-mons text-xs bg-red-600"
            onClick={() => setClickedCopy(false)}
          >
            no
          </button>
          <button className="flex-shrink-0 flex-grow-0 basis-[45%] py-2 rounded-md  capitalize font-mons font-bold text-xs bg-green-600">
            yes
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="relative w-full justify-between h-fit py-8 px-4 items-center flex lg:flex-row flex-col gap-6 lg:gap-0">
      {clickedCopy && <AreUSure />}
      <div className="flex flex-col lg:w-[48%] min-h-56 border border-solid shadow-md relative py-3 w-[100%]">
        <p className="bg-yellow-500 font-mons text-xs py-1  rounded-sm font-bold capitalize absolute top-2 left-2 px-4">
          pro
        </p>

        <div className="self-center mt-12 w-16 h-16">
          <img
            src="/james.jpg"
            alt=""
            className="h-full w-full object-contain rounded-[50%]"
          />
        </div>

        <p className="self-center mt-2 capitalize font-mons text-sm font-bold">
          Javis b. buckley
        </p>

        <div className="flex flex-col items-center gap-2 mt-5 w-[80%] border border-t-4 h-fit px-4 py-4 border-t-blue-500 border-solid self-center">
          <div className="text-center w-full font-mono capitalize font-semibold">
            <p className="text-xs">followers</p>
            <h1>45,000</h1>
          </div>
          <div className="text-center w-full font-mono capitalize font-semibold">
            <p className="text-xs">minimum start-up capital</p>
            <h1>$20,000</h1>
          </div>
          <div className="flex justify-center text-sm items-center gap-1 text-center w-full font-mono capitalize font-semibold">
            <p>percentage profit:</p> <h1>96%</h1>
          </div>
          <div className="flex justify-center text-sm  items-center gap-1 text-center w-full font-mono capitalize font-semibold">
            <p>total profit: </p>
            <h1>$1,280,000</h1>
          </div>
          <div className="flex justify-center text-sm  items-center gap-1 text-center w-full font-mono capitalize font-semibold">
            <p>rating:</p>
            <div className="flex gap-1 items-center">
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
            </div>
          </div>

          <button
            disabled={clickedCopy}
            className="w-full mt-5 bg-green-500 py-2 rounded-sm text-white font-mono capitalize"
            onClick={() => setClickedCopy(true)}
          >
            copy Javis B
          </button>
        </div>
      </div>

      <div className="flex flex-col w-[100%] lg:w-[48%] min-h-56 border border-solid shadow-md relative py-3">
        <p className="bg-yellow-500 font-mons text-xs py-1  rounded-sm font-bold capitalize absolute top-2 left-2 px-4">
          pro
        </p>

        <div className="self-center mt-12 w-16 h-16">
          <img
            src="/marydao.jpg"
            alt=""
            className="h-full w-full object-contain rounded-[50%]"
          />
        </div>

        <p className="self-center mt-2 capitalize font-mons text-sm font-bold">
          mara dao
        </p>

        <div className="flex flex-col items-center gap-2 mt-5 w-[80%] border border-t-4 h-fit px-4 py-4 border-t-blue-500 border-solid self-center">
          <div className="text-center w-full font-mono capitalize font-semibold">
            <p className="text-xs">followers</p>
            <h1>40,000</h1>
          </div>
          <div className="text-center w-full font-mono capitalize font-semibold">
            <p className="text-xs">minimum start-up capital</p>
            <h1>$4,000</h1>
          </div>
          <div className="flex justify-center text-sm items-center gap-1 text-center w-full font-mono capitalize font-semibold">
            <p>percentage profit:</p> <h1>94%</h1>
          </div>
          <div className="flex justify-center text-sm  items-center gap-1 text-center w-full font-mono capitalize font-semibold">
            <p>total profit: </p>
            <h1>$36,500,000</h1>
          </div>
          <div className="flex justify-center text-sm  items-center gap-1 text-center w-full font-mono capitalize font-semibold">
            <p>rating:</p>
            <div className="flex gap-1 items-center">
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
              <StarIcon className="w-5 text-yellow-500 h-5" />
            </div>
          </div>

          <button
            disabled={clickedCopy}
            className="w-full mt-5 bg-green-500 py-2 rounded-sm text-white font-mono capitalize"
            onClick={() => setClickedCopy(true)}
          >
            copy Mara
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyTrading;
