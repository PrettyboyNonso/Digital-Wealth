import clsx from "clsx";
import {
  ChartCandlestick,
  Droplet,
  Headset,
  LucideIcon,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  interface AboutProps {
    head: string;
    text: string;
    icon: LucideIcon;
    isDown: boolean;
  }
  const AboutCard = ({ head, text, isDown, icon: Icon }: AboutProps) => {
    return (
      <div
        className={clsx(
          "flex-shrink-0 flex-grow-0 basis-[24%] border-2 border-solid min-h-52 rounded-md px-4 py-6",
          {
            "mt-6": isDown,
            "mt-0": !isDown,
          }
        )}
      >
        <Icon className="bg-yellow-400 px-1 w-10 h-7 py-1 rounded-md" />
        <h2 className="mt-3 capitalize font-mons font-semibold text-sm">
          {head}
        </h2>
        <p className="mt-4 font-mons font-medium text-xs">{text}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-fit">
        <h1 className=" text-lg md:text-xl font-bold capitalize font-mons ">
          learn <span className="text-orange-700">about</span> us
        </h1>
        <div className="w-9 h-1 bg-green-950 self-end rounded-sm"></div>
      </div>
      <div className="w-full flex flex-col lg:flex-row mt-8 gap-4 items-start flex-wrap">
        <AboutCard
          head=" Unwavering Security"
          text=" Our platform offers unwavering security, utilizing the latest
          encryption technologies and strict protocols to protect your assets
          and personal information at all times. We prioritize the safety of
          your investments, ensuring a trusted and reliable trading experience.
          With constant monitoring and secure transactions, your data is in safe
          hands."
          icon={ShieldCheck}
          isDown={false}
        />
        <AboutCard
          head="  Enhanced Liquidity"
          text=" Experience enhanced liquidity with our platform, allowing you to execute trades quickly and efficiently at competitive prices. Our vast network of market makers and liquidity providers ensures seamless trading, even during high volatility periods. This means your trades are filled with minimal slippage and at the best possible rates."
          icon={Droplet}
          isDown={true}
        />
        <AboutCard
          head="Customer Support"
          text="  Our dedicated customer support team is available 24/7 to assist you with any queries or issues you may encounter. Whether you're a beginner or an experienced trader, our experts are here to guide you through every step. With multiple communication channels, you can reach us anytime, ensuring that you never face any hurdles while trading."
          icon={Headset}
          isDown={true}
        />
        <AboutCard
          head=" Advanced Trading Tools"
          text="  Unlock powerful trading tools designed to help you make informed decisions. Our platform offers advanced charting features, real-time market data, and customizable technical indicators. Whether you're a day trader or long-term investor, these tools empower you to analyze trends, spot opportunities, and execute strategies with precision."
          icon={ChartCandlestick}
          isDown={false}
        />
      </div>
      <button className="self-center mt-6 bg-orange-700 text-white capitalize text-xs font-mons font-semibold px-3 py-1">
        Learn more
      </button>
    </div>
  );
};

export default About;
