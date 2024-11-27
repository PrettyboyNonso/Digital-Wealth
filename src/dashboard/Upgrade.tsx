import { Check } from "lucide-react";

const Upgrade = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col w-full gap-14 mt-3">
        <div className="w-full px-2 py-2 min-h-52">
          <h2 className="w-full text-center font-mono text-2xl font-semibold text-blue-600 uppercase">
            1.5% roi
          </h2>
          <h2 className="w-full text-center font-mono text-2xl font-bold mt-1 text-blue-600 capitalize border-b border-solid pb-3">
            beginners plan
          </h2>

          <div className="flex flex-col mt-5 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                minimum amount: $100
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                maximum amount: $25,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                1.5% daily for 60 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                no charges amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                duration: 60 days
              </p>
            </div>

            <button className="font-mono font-bold uppercase mt-4 bg-blue-600 text-white py-3 rounded-sm">
              join plan
            </button>
          </div>
        </div>

        <div className="w-full px-2 py-2 min-h-52">
          <h2 className="w-full text-center font-mono text-2xl font-semibold text-blue-600 uppercase">
            2.5% roi
          </h2>
          <h2 className="w-full text-center font-mono text-2xl font-bold mt-1 text-blue-600 capitalize border-b border-solid pb-3">
            standard plan
          </h2>

          <div className="flex flex-col mt-5 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                minimum amount: $25,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                maximum amount: $100,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                2.5% daily for 60 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                no charges amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                duration: 60 days
              </p>
            </div>

            <button className="font-mono font-bold uppercase mt-4 bg-blue-600 text-white py-3 rounded-sm">
              join plan
            </button>
          </div>
        </div>

        <div className="w-full px-2 py-2 min-h-52">
          <h2 className="w-full text-center font-mono text-2xl font-semibold text-blue-600 uppercase">
            3.5% roi
          </h2>
          <h2 className="w-full text-center font-mono text-2xl font-bold mt-1 text-blue-600 capitalize border-b border-solid pb-3">
            Professional plan
          </h2>

          <div className="flex flex-col mt-5 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                minimum amount: $100,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                maximum amount: $500,000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                3.5% daily for 60 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                no charges amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-7 h-7" />
              <p className="font-mono font-bold capitalize">
                duration: 60 days
              </p>
            </div>

            <button className="font-mono font-bold uppercase mt-4 bg-blue-600 text-white py-3 rounded-sm">
              join plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
