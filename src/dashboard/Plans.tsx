const Plans = () => {
  interface PlansInterface {
    plan: string;
    percent: string;
    minDeposit: string;
    maxDeposit: string;
  }
  const plansObj: PlansInterface[] = [
    {
      plan: "beginners plan",
      percent: "4.5",
      minDeposit: "$500",
      maxDeposit: "$25000",
    },
    {
      plan: "standard plan",
      percent: "4.5",
      minDeposit: "$25000",
      maxDeposit: "$100000",
    },
    {
      plan: "business plan",
      percent: "20.1",
      minDeposit: "$100000",
      maxDeposit: "$1000000",
    },
    {
      plan: "basic plan",
      percent: "4.5",
      minDeposit: "$3000",
      maxDeposit: "$29999",
    },
    {
      plan: "classic plan",
      percent: "1500",
      minDeposit: "$2500",
      maxDeposit: "$2500",
    },
    {
      plan: "mature plan",
      percent: "10.5",
      minDeposit: "$5000",
      maxDeposit: "$5000",
    },
  ];
  const PlanCard: React.FC<{ value: PlansInterface }> = ({ value }) => {
    return (
      <div className="shadow-md flex-shrink-0 flex-grow-0 w-full py-4 border border-solid h-full flex flex-col items-center gap-3 md:w-[50%]">
        <div className="w-full  flex text-sm justify-center text-white uppercase font-mons font-semibold ">
          <h1 className="bg-blue-700 py-2 px-4 mt-4">{value.plan}</h1>
        </div>
        <h1 className="font-bold text-xl text-gray-700 font-mons ">
          {value.percent}%{" "}
          <small className="font-medium capitalize text-xs">/ trade</small>
        </h1>

        <div className="mt-5 border-t border-solid w-full flex flex-col items-center gap-2 font-semibold font-mons capitalize text-xs">
          <div className="py-2">
            <p>principal return on maturity</p>
          </div>

          <div className="bg-gray-200 w-full flex justify-center py-4">
            <p>instant withdrawal</p>
          </div>

          <div className="py-2">
            <p>professional charts</p>
          </div>

          <div className="bg-gray-200 w-full flex justify-center py-4">
            <p>24/7 support</p>
          </div>

          <div className="py-2">
            <p>min deposit: {value.minDeposit}</p>
          </div>

          <div className="bg-gray-200 w-full flex justify-center py-4">
            <p>max deposit: {value.maxDeposit}</p>
          </div>
        </div>

        <button className="bg-blue-700 font-mono text-white mt-4 uppercase text-sm rounded-sm px-6 py-1">
          select plan
        </button>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col gap-4 items-start px-4 py-4 md:items-center">
      {plansObj.map((item, index) => (
        <PlanCard value={item} key={index} />
      ))}
    </div>
  );
};

export default Plans;
