const Contact = () => {
  return (
    <div className="w-full min-h-44 md:border md:border-solid rounded-lg text-center lg:text-left bg-transparent md:bg-green-950 justify-between py-6 lg:py-2 px-5 flex flex-col lg:flex-row lg:items-center">
      <div className="flex-shrink-0 flex-grow-0 basis-[50%]">
        <h1 className="text-lg md:text-xl capitalize font-mons  font-bold md:font-semibold text-black md:text-white">
          join 2,000+ traders
        </h1>
        <p className="mt-2 text-[11px] lg:text-xs text-black md:text-white capitalize font-mons font-medium">
          stay in the loop with everything you need to know
        </p>
      </div>

      <div className="flex-shrink-0 flex-grow-0 basis-[50%] items-end justify-start flex flex-col">
        <form action="" className="flex gap-4 w-full lg:w-fit">
          <input
            type="text"
            placeholder="Enter your email"
            className="lg:w-72 w-[100%] font-semibold text-xs outline-none font-mons px-2 h-8 border border-black"
          />
          <button className="bg-black px-2 text-white font-mons  capitalize text-xs font-semibold">
            subscribe
          </button>
        </form>
        <div className="lg:w-96  w-[100%] flex justify-start">
          <small className="mt-1 text-white font-medium text-xs px-1">
            Your data are protected. We care about your privacy
          </small>
        </div>
      </div>
    </div>
  );
};

export default Contact;
