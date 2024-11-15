const Contact = () => {
  return (
    <div className="w-full min-h-44 border border-solid rounded-lg bg-green-950 py-2 px-5 flex items-center">
      <div className="flex-shrink-0 flex-grow-0 basis-[50%]">
        <h1 className="text-xl capitalize font-mons font-semibold text-white">
          join 2,000+ traders
        </h1>
        <p className="mt-2 text-xs text-white capitalize font-mons  font-medium">
          stay in the loop with everything you need to know
        </p>
      </div>

      <div className="flex-shrink-0 flex-grow-0 basis-[50%] items-center justify-start flex flex-col">
        <form action="" className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-72 font-semibold text-xs outline-none font-mons px-2 h-8"
          />
          <button className="bg-black px-2 text-white font-mons capitalize text-xs font-semibold">
            subscribe
          </button>
        </form>
        <small className="mt-1 text-white font-medium text-xs flex gap-3">
          Your data are protected. We care about your privacy
        </small>
      </div>
    </div>
  );
};

export default Contact;
