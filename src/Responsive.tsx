// import { ArrowUpRight } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "./context/LoginContext";

const Responsive = ({
  setNavIsOpen,
}: {
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("context is empty");
  }

  const { isActive, sectionArray } = context;

  function handleSmoothScroll(index: number) {
    sectionArray.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleLinkClick() {
    setNavIsOpen(false);
    const bodyTag = document.querySelector("body");
    if (bodyTag) {
      bodyTag.style.overflow = "auto";
    }
  }
  const NavClick = (index: number) => {
    handleSmoothScroll(index);
    handleLinkClick();
  };

  return (
    <div className="w-full h-dvh lg:hidden absolute z-30 responsive border-b-2 border-solid">
      <div className="w-full flex flex-col py-8 bg-white gap-8  min-h-full">
        <ul className="flex flex-col items-center justify-center gap-8">
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              className={`
                    ${isActive === "home" ? "text-teal-600" : "text-black"}`}
              onClick={() => NavClick(0)}
            >
              home
            </NavLink>
          </li>
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              className={`
                    ${isActive === "market" ? "text-teal-600" : "text-black"}`}
              onClick={() => NavClick(1)}
            >
              market
            </NavLink>
          </li>
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              className={`
                    ${isActive === "about" ? "text-teal-600" : "text-black"}`}
              onClick={() => NavClick(4)}
            >
              about
            </NavLink>
          </li>
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              className={`
                    ${isActive === "trade" ? "text-teal-600" : "text-black"}`}
              onClick={() => NavClick(6)}
            >
              trading
            </NavLink>
          </li>
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              className={`
                    ${isActive === "plans" ? "text-teal-600" : "text-black"}`}
              onClick={() => NavClick(7)}
            >
              plans
            </NavLink>
          </li>
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              className={`
                    ${
                      isActive === "testimonials"
                        ? "text-teal-600"
                        : "text-black"
                    }`}
              onClick={() => NavClick(8)}
            >
              testimonial
            </NavLink>
          </li>
          <li className="font-mons capitalize font-semibold text-[13px]">
            <NavLink
              to="/"
              className={`
                    ${isActive === "support" ? "text-teal-600" : "text-black"}`}
              onClick={() => NavClick(9)}
            >
              support
            </NavLink>
          </li>
        </ul>

        <div className="flex-grow-0 flex-shrink-0 basis-[25%]  gap-8 items-center justify-center flex ">
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
        </div>

        {/* <NavLink
          to="/dashboard"
          className="flex-grow-0 flex-shrink-0 basis-[25%]  items-center justify-center flex flex-col"
        >
          <button className="rounded-sm flex gap-1 bg-orange-700 text-xs font-mons px-3 py-2 text-white capitalize font-semibold">
            dashboard <ArrowUpRight className="w-4 h-4" />
          </button>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Responsive;
