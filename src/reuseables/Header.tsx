import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full min-h-fit max-h-full ">
      <div className="font-mons w-full min-h-16 flex px-6 py-2 items-center  gap-4">
        <h1 className="uppercase font-logo text-slate-900 flex-shrink-0 flex-grow-0 basis-[30%]">
          digital <span className="text-orange-600">wealth</span>
        </h1>
        <nav className="flex-shrink-0 flex-grow-0 basis-[40%]">
          <ul className="flex justify-around items-center">
            <li className="font-mons capitalize font-semibold text-[13px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-black"
                }
              >
                home
              </NavLink>
            </li>
            <li className="font-mons capitalize font-semibold text-[13px]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-black"
                }
              >
                about
              </NavLink>
            </li>
            {/* <li className="font-mons capitalize font-semibold text-[13px]">
              <NavLink
                to="/buy"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-black"
                }
              >
                buy crypto
              </NavLink>
            </li> */}

            <li className="font-mons capitalize font-semibold text-[13px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-black"
                }
              >
                contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex-grow-0 flex-shrink-0 basis-[25%] flex gap-12 items-end justify-end">
          <NavLink to="/register">
            <button className="text-xs text-white font-bold font-mons capitalize bg-teal-600 px-3 py-1">
              register
            </button>
          </NavLink>

          <NavLink to="login">
            <button className="text-xs text-gray-600 font-bold font-mons capitalize border  border-teal-600 px-3 py-1">
              login
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
