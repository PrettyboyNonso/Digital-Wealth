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
    <>
      <header className="w-full min-h-fit max-h-full lg:block flex justify-between pr-4 items-center">
        <div className="font-mons w-full min-h-16 flex px-6 items-center gap-4">
          <h1 className="uppercase font-logo text-slate-900 flex-shrink-0 flex-grow-0 basis-[50%] lg:basis-[30%]">
            digital <span className="text-orange-600">wealth</span>
          </h1>
          <nav className="hidden lg:flex-shrink-0 lg:flex-grow-0 lg:basis-[40%] lg:block ">
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

          <div className="flex-grow-0 flex-shrink-0 basis-[25%]  gap-12 items-end justify-end lg:flex hidden">
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
        <div className="lg:hidden">
          <Menu onClick={openNavClose} />
        </div>
      </header>
      {navIsOpen && <Responsive setNavIsOpen={setNavIsOpen} />}
    </>
  );
};

export default Header;
