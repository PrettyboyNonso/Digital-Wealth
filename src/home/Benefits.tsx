import {
  ChartCandlestick,
  ChartNoAxesGantt,
  LucideIcon,
  Smartphone,
  Wallet,
} from "lucide-react";

const Benefits = () => {
  interface BenefitCardKey {
    icon: LucideIcon;
    head: string;
    paragraph: string;
  }

  const benefitObj = [
    {
      icon: ChartCandlestick,
      head: "advanced trading tool",
      paragraph:
        " Plan your trades effectively with our wide range of free trading tools",
    },
    {
      icon: ChartNoAxesGantt,
      head: "Trading Products",
      paragraph:
        " All the best possible opportunities to diversify your trading portfolio",
    },
    {
      icon: Smartphone,
      head: "Trading Platforms",
      paragraph:
        "Powerful platforms to suit all trading styles and needs on any device",
    },
    {
      icon: Wallet,
      head: "Funding Methods",
      paragraph:
        "Fund your account for free with these quick, easy and secure methods",
    },
  ];
  const BenefitCard = ({ value }: { value: BenefitCardKey }) => {
    const Icon = value.icon;
    return (
      <div className="px-3 flex flex-col items-center py-5 flex-shrink-0 flex-grow-0 basis-[22%] min-h-32 shadow-2xl rounded-lg">
        <div>
          <Icon className="w-7 h-7 text-orange-500" />
        </div>
        <div className="mt-4 capitalize text-white font-mons font-medium text-sm flex flex-col w-full items-center">
          <h2>{value.head}</h2>
          <p className="text-xs font-mons text-white mt-2 capitalize font-medium text-center">
            {value.paragraph}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full py-3">
      <h2 className="text-white text-lg uppercase font-mons font-bold">
        why choose us?
      </h2>
      <div className="w-full flex items-center justify-between mt-8">
        {benefitObj.map((value, index) => (
          <BenefitCard value={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
