import { stateFunc } from "@/App";
import LoginContext from "@/context/LoginContext";
import { CryptoDetails } from "@/lib/utils";
import Responsive from "@/Responsive";
import { Menu } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const LoadingCoin = () => {
  return (
    <div className=" px-2 flex flex-shrink-0 flex-grow-0 w-fit min-h-8 items-center gap-2 basis-[12%]">
      <div className="flex-shrink-0 flex-grow-0  border border-solid w-10 h-4 rounded-sm animate-blink bg-gray-200 "></div>
      <div className="flex-shrink-0 flex-grow-0 w-fit text-xs font-semibold capitalize font-mons text-blue-500">
        <h3 className="w-12 h-4 rounded-sm animate-blink bg-gray-200 border border-solid"></h3>
      </div>
      <div className="flex-shrink-0 flex-grow-0 w-fit text-[11px] font-semibold uppercase font-mons text-gray-700">
        <h3 className="w-6 h-4 rounded-sm bg-gray-200 animate-blink border border-solid"></h3>
      </div>
    </div>
  );
};

export const Coin = ({ coinData }: { coinData: CryptoDetails }) => {
  return (
    <div className="flex flex-shrink-0 flex-grow-0 w-fit min-h-10 items-center gap-2">
      <div className="flex-shrink-0 flex-grow-0  ">
        <img src={coinData.image.thumb} alt="thumbs" className="" />
      </div>
      <div className="flex-shrink-0 flex-grow-0 w-fit text-xs font-semibold capitalize font-mons text-blue-500">
        <h3>{coinData.name}</h3>
      </div>
      <div className="flex-shrink-0 flex-grow-0 w-fit text-[11px] font-semibold uppercase font-mons text-gray-700">
        <h3>[{coinData.symbol}]</h3>
      </div>
      <div
        className={`flex-shrink-0 flex-grow-0 w-fit text-xs font-semibold capitalize font-mons ${
          coinData.market_data.price_change_percentage_24h >= 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        <h3>{coinData.market_data.price_change_percentage_24h?.toFixed(1)}%</h3>
      </div>
    </div>
  );
};

const Header = ({ setNavIsOpen, navIsOpen }: stateFunc) => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("context is empty");
  }

  const { assetState, isActive, sectionArray } = context;

  function handleSmoothScroll(index: number) {
    sectionArray.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(isActive);
  }

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
    <div className="fixed top-0 z-50 bg-white w-full border-b border-solid ">
      <div className="w-full py-2 bg-gray-100 ">
        {assetState.length === 0 ? (
          <div className="flex items-center w-full flex-nowrap  gap-6 hide-scrollbar min-h-10 px-3">
            <LoadingCoin />
            <LoadingCoin />
            <LoadingCoin />
            <LoadingCoin />
            <LoadingCoin />
            <LoadingCoin />
            <LoadingCoin />
            <LoadingCoin />
          </div>
        ) : (
          <div className="animate-scroll  flex items-center w-full flex-nowrap  gap-6 hide-scrollbar min-h-10">
            {assetState.map((value, index) => (
              <Coin coinData={value} key={index} />
            ))}
            {assetState.map((value, index) => (
              <Coin coinData={value} key={index} />
            ))}
          </div>
        )}
      </div>
      <header
        className={` w-full min-h-fit max-h-full lg:block justify-between pr-4 items-center flex`}
      >
        <div className="font-mons w-full min-h-16 flex px-6 items-center ">
          <h1 className="uppercase font-logo text-slate-900 flex-shrink-0 flex-grow-0 basis-[60%] lg:basis-[20%]">
            digital <span className="text-orange-600">wealth</span>
          </h1>
          <nav className="hidden lg:flex-shrink-0 lg:flex-grow-0 lg:basis-[60%] lg:block ">
            <ul className="flex justify-around">
              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/"
                  className={`
                    ${isActive === "home" ? "text-teal-600" : "text-black"}
                    `}
                  onClick={() => handleSmoothScroll(0)}
                >
                  home
                </NavLink>
              </li>

              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/"
                  className={`
                    ${isActive === "market" ? "text-teal-600" : "text-black"}`}
                  onClick={() => handleSmoothScroll(1)}
                >
                  market
                </NavLink>
              </li>

              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/"
                  className={`
                    ${isActive === "about" ? "text-teal-600" : "text-black"}`}
                  onClick={() => handleSmoothScroll(4)}
                >
                  about
                </NavLink>
              </li>

              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/"
                  className={`
                    ${isActive === "trade" ? "text-teal-600" : "text-black"}`}
                  onClick={() => handleSmoothScroll(6)}
                >
                  trading
                </NavLink>
              </li>
              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/"
                  className={`
                    ${isActive === "plans" ? "text-teal-600" : "text-black"}`}
                  onClick={() => handleSmoothScroll(7)}
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
                  onClick={() => handleSmoothScroll(8)}
                >
                  testimonial
                </NavLink>
              </li>
              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/"
                  className={`
                    ${isActive === "license" ? "text-teal-600" : "text-black"}`}
                  onClick={() => handleSmoothScroll(9)}
                >
                  license
                </NavLink>
              </li>
              <li className="font-mons capitalize font-semibold text-[13px]">
                <NavLink
                  to="/"
                  className={`
                    ${isActive === "support" ? "text-teal-600" : "text-black"}`}
                  onClick={() => handleSmoothScroll(10)}
                >
                  support
                </NavLink>
              </li>
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
          <Menu onClick={openNavClose} className="w-7 h-7" />
        </div>
      </header>
      {navIsOpen && <Responsive setNavIsOpen={setNavIsOpen} />}
    </div>
  );
};

export default Header;
