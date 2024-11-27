const Loan = () => {
  return (
    <div className="px-4 py-4 w-full h-full">
      <div className="w-full">
        <h2 className="text-center font-mono text-sm capitalize font-bold  w-full mt-2">
          loan request application
        </h2>

        <form action="" className="w-full mt-7 flex flex-col gap-8">
          <div className="w-full">
            <p className="font-mono font-bold ">Loan Amount (USD)</p>
            <input
              type="number"
              placeholder="Loan Amount"
              className="w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
            />
          </div>
          <div className="w-full">
            <p className="font-mono font-bold ">Select Loan Facility</p>
            <select
              id="loan-facility"
              name="loanFacility"
              className="w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
            >
              <option value="personal-loan">Personal Loan</option>
              <option value="home-loan">Home Loan</option>
              <option value="car-loan">Car Loan</option>
              <option value="education-loan">Education Loan</option>
              <option value="business-loan">Business Loan</option>
            </select>
          </div>

          <div className="w-full">
            <p className="font-mono font-bold ">Select Duration</p>
            <select
              id="loan-duration"
              name="loanDuration"
              className="w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
            >
              <option value="1-month">1 Month</option>
              <option value="3-months">3 Months</option>
              <option value="6-months">6 Months</option>
              <option value="9-months">9 Months</option>
              <option value="12-months">12 Months</option>
            </select>
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              className="w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Purpose For Loan..."
            ></textarea>
          </div>

          <div className="w-full">
            <p className="font-mono font-bold ">Monthly Income (USD)</p>
            <input
              type="number"
              placeholder="Enter Monthly Income"
              className="w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
            />
          </div>

          <div className="flex justify-center">
            <button className="w-[90%]  bg-green-600 text-sm rounded-sm text-white font-mono capitalize py-2">
              submit request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loan;
