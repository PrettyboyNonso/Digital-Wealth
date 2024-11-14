const Header = () => {
  return (
    <header className="w-full min-h-fit max-h-full ">
      <div className="font-mons w-full min-h-16 flex px-6 py-2 items-center  gap-4">
        <h1 className="uppercase font-logo text-slate-900 flex-shrink-0 flex-grow-0 basis-[30%]">
          digital <span className="text-orange-600">wealth</span>
        </h1>
        <nav className="flex-shrink-0 flex-grow-0 basis-[40%]">
          <ul className="flex justify-between items-center">
            <li className="font-mons capitalize font-semibold text-sm">home</li>
            <li className="font-mons capitalize font-semibold text-sm">
              buy crypto
            </li>
            <li className="font-mons capitalize font-semibold text-sm">
              about
            </li>
            <li className="font-mons capitalize font-semibold text-sm">
              contact
            </li>
          </ul>
        </nav>

        <div className="flex-grow-0 flex-shrink-0 basis-[25%] flex gap-12 items-end justify-end">
          <button className="text-xs text-white font-bold font-mons capitalize bg-yellow-600 px-3 py-1">
            sign up
          </button>
          <button className="text-xs text-gray-600 font-bold font-mons capitalize border  border-yellow-600 px-3 py-1">
            login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
