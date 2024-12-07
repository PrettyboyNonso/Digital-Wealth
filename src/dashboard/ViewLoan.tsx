const ViewLoan = () => {
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="px-4 py-4 max-h-fit w-[90%] lg:w-[50%] border border-solid rounded-md min-h-48 shadow-lg bg-teal-50 flex flex-col items-center">
        <h1 className="font-mono lg:text-sm text-xs font-semibold capitalize text-blue-700">
          no active loans
        </h1>
        <p className="font-mono font-bold mt-2 text-center text-xs lg:text-sm ">
          {" "}
          Oops! you do not have any active loan at the moment. Approved loans
          shows here
        </p>
        <p className="text-gray-600 font-mono font-bold capitalize text-xs"></p>

        <button className="mt-8 bg-green-600 text-white px-3 py-2 font-mono text-xs lg:text-sm font-bold capitalize rounded-md">
          apply for a loan
        </button>
      </div>
    </div>
  );
};

export default ViewLoan;
