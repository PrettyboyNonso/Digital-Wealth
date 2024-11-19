import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Responsive = ({
  setNavIsOpen,
}: {
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  function handleLinkClick() {
    setNavIsOpen(false);
    const bodyTag = document.querySelector("body");
    if (bodyTag) {
      bodyTag.style.overflow = "auto";
    }
  }
  return (
    <div className="w-full h-0 flex flex-col lg:hidden absolute z-30 responsive">
      <div className="w-full flex flex-col py-8 bg-white gap-8  max-h-fit flex-shrink-0 flex-grow-0 basis-[fit-content]">
        <ul className="flex flex-col items-center justify-center gap-8">
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive ? "text-teal-600" : "text-black"
              }
            >
              about
            </NavLink>
          </li>

          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive ? "text-teal-600" : "text-black"
              }
            >
              contact
            </NavLink>
          </li>
        </ul>

        {/* <div className="flex-grow-0 flex-shrink-0 basis-[25%]  gap-8 items-center justify-center flex flex-col">
          <NavLink to="/register" onClick={handleLinkClick}>
            <button className="text-xs text-white font-bold font-mons capitalize bg-teal-600 px-3 py-1">
              register
            </button>
          </NavLink>

          <NavLink to="login" onClick={handleLinkClick}>
            <button className="text-xs text-gray-600 font-bold font-mons capitalize border  border-teal-600 px-3 py-1">
              login
            </button>
          </NavLink>
        </div> */}

        <NavLink
          to="/dashboard"
          className="flex-grow-0 flex-shrink-0 basis-[25%]  items-center justify-center flex flex-col"
        >
          <button className="rounded-sm flex gap-1 bg-orange-700 text-xs font-mons px-3 py-2 text-white capitalize font-semibold">
            dashboard <ArrowUpRight className="w-4 h-4" />
          </button>
        </NavLink>
      </div>
      <div className="flex-shrink-0 flex-grow-0 bg-black basis-[50%] opacity-[0.3]"></div>
    </div>
  );
};

export default Responsive;
