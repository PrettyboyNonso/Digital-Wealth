const Loan = () => {
  return (
    <div className="w-full h-full py-4 px-4 lg:flex lg:justify-between lg:items-start">
      <div className="lg:w-[50%] lg:border lg:border-solid lg:shadow-xl lg:px-4 lg:py-4 rounded-md">
        <div className="w-full">
          <h2 className="text-center font-mono text-sm capitalize font-bold  w-full mt-2">
            loan request application
          </h2>

          <form action="" className="w-full mt-7 flex flex-col gap-8">
            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">
                Loan Amount (USD)
              </p>
              <input
                type="number"
                placeholder="Loan Amount"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              />
            </div>
            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">
                Select Loan Facility
              </p>
              <select
                id="loan-facility"
                name="loanFacility"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              >
                <option value="personal-loan">Personal Loan</option>
                <option value="home-loan">Home Loan</option>
                <option value="car-loan">Car Loan</option>
                <option value="education-loan">Education Loan</option>
                <option value="business-loan">Business Loan</option>
              </select>
            </div>

            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">Select Duration</p>
              <select
                id="loan-duration"
                name="loanDuration"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
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
                className="font-mono lg:text-xs w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Purpose For Loan..."
              ></textarea>
            </div>

            <div className="w-full">
              <p className="font-mono font-bold lg:text-xs">
                Monthly Income (USD)
              </p>
              <input
                type="number"
                placeholder="Enter Monthly Income"
                className="lg:text-xs w-full mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono px-2 py-3"
              />
            </div>

            <div className="flex justify-center">
              <button className="w-[90%] lg:text-sm  bg-green-600 text-sm rounded-sm text-white font-mono capitalize py-2 lg:w-full">
                submit request
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-between w-[48%] border border-solid">
        <div className="flex-shrink-0 flex-grow-0 basis-[48%] border border-solid"></div>
        <div className="flex-shrink-0 flex-grow-0 basis-[48%] border border-solid rounde"></div>
      </div>
    </div>
  );
};

export default Loan;
