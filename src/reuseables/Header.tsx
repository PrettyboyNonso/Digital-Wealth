import { stateFunc } from "@/App";
import Responsive from "@/Responsive";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = ({ setNavIsOpen, navIsOpen }: stateFunc) => {
  function openNavClose() {
    setNavIsOpen((prev: boolean) => {
      const newState = !prev;
      const bodyTag = document.querySelector("body");
      if (bodyTag) {
        console.log(bodyTag);
        if (newState) {
          bodyTag.style.overflowY = "hidden";
        } else {
          bodyTag.style.overflowY = "auto";
        }
      }
      return newState;
    });
  }

  return (
    <div className="fixed top-0 z-50 bg-white w-full border-b border-solid">
      <div className="w-full min-h-10 border border-solid px-10 flex items-center"></div>
      <header
        className={` w-full min-h-fit max-h-full lg:block justify-between pr-4 items-center flex`}
      >
        <div className="font-mons w-full min-h-16 flex px-6 items-center">
          <h1 className="uppercase font-logo text-slate-900 flex-shrink-0 flex-grow-0 basis-[40%] lg:basis-[20%]">
            digital <span className="text-orange-600">wealth</span>
          </h1>
          <nav className="hidden lg:flex-shrink-0 lg:flex-grow-0 lg:basis-[60%] lg:block ">
            <ul className="flex justify-around">
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
                  to="/market"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-black"
                  }
                >
                  market
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

              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/trading"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-black"
                  }
                >
                  trading
                </NavLink>
              </li>
              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/trading"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-black"
                  }
                >
                  testimonial
                </NavLink>
              </li>
              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/trading"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-black"
                  }
                >
                  plans
                </NavLink>
              </li>
              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/trading"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-black"
                  }
                >
                  support
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
            </ul>
          </nav>

          <div className="flex-grow-0 flex-shrink-0 basis-[20%]  gap-12 items-end justify-end lg:flex hidden">
            <NavLink to="/register">
              <button className="text-xs text-white font-bold font-mons capitalize bg-teal-600 px-3 py-1">
                register
              </button>
            </NavLink>

            <NavLink to="/login">
              <button className="text-xs text-gray-600 font-bold font-mons capitalize border  border-teal-600 px-3 py-1">
                login
              </button>
            </NavLink>
          </div>

          {/* <NavLink
            to="/dashboard"
            className="flex-grow-0 flex-shrink-0 basis-[25%] justify-center lg:flex hidden"
          >
            <button className="flex gap-1 bg-orange-700 text-xs font-mons px-3 py-2 text-white capitalize font-semibold">
              dashboard <ArrowUpRight className="w-4 h-4" />
            </button>
          </NavLink> */}
        </div>
        <div className="lg:hidden">
          <Menu onClick={openNavClose} />
        </div>
      </header>
      {navIsOpen && <Responsive setNavIsOpen={setNavIsOpen} />}
    </div>
  );
};

export default Header;
