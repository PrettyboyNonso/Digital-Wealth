import {
  ArrowLeftRight,
  ChevronDown,
  Landmark,
  ShieldEllipsis,
} from "lucide-react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  LineControllerChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { _DeepPartialObject } from "node_modules/chart.js/dist/types/utils";
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Profits",
      data: [0, 10, 30, 50, 70, 80],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",

      tension: 0.4, // Makes the line smooth
    },
  ],
};

const options: _DeepPartialObject<
  CoreChartOptions<"line"> &
    ElementChartOptions<"line"> &
    PluginChartOptions<"line"> &
    DatasetChartOptions<"line"> &
    ScaleChartOptions<"line"> &
    LineControllerChartOptions
> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top", // Ensure this is a valid literal type
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide vertical grid lines
      },
    },
    y: {
      display: false,
    },
  },
};
const LearnTrading = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center  justify-center">
        <h1 className="font-mons text-2xl font-semibold">
          Trade what you want, When you want
        </h1>
        <p className="max-w-[70%] text-sm font-medium font-mons mt-2">
          One of the primary goals of Digital Wealth Trade is to provide the
          best product in the market. Our relationships with leading tier one
          financial institutions mean deep liquidity and tighter spreads for
          Forex traders.
        </p>
      </div>

      <div className="flex flex-wrap mt-6 gap-6 px-28">
        <div className="flex-shrink-0 flex-grow-0 basis-[48%] border border-solid min-h-32 bg-teal-50 flex flex-col items-center py-6 gap-2 rounded-md shadow-xl">
          <h1 className="text-3xl uppercase font-mons font-bold text-teal-700">
            10k+
          </h1>
          <p className="text-sm capitalize font-semibold font-mons mt-5">
            customers are already benefiting from our website
          </p>
        </div>
        <div className="flex-shrink-0 flex-grow-0 basis-[48%] border border-solid min-h-32 bg-teal-50 flex flex-col items-center py-6 gap-2 rounded-md shadow-xl">
          <h2 className="text-md capitalize font-mons font-semibold">
            Trade Forex, Indices, Shares & Commodities
          </h2>
          <div className=" w-full flex mt-2 items-end">
            <div className="flex-shrink-0 flex-grow-0 basis-[32%] px-2 py-1 flex justify-end">
              <ShieldEllipsis className="border border-solid px-2 py-1 w-12 h-12 rounded-md bg-teal-700 text-white" />
            </div>
            <div className="flex-shrink-0 flex-grow-0 basis-[32%] px-2 py-1 flex justify-center">
              <ArrowLeftRight className="px-2 py-1 w-12 h-12 text-gray-500" />
            </div>
            <div className="flex-shrink-0 flex-grow-0 basis-[32%] px-2 py-1 flex justify-start">
              <Landmark className="border border-solid px-2 py-1 w-12 h-12 bg-blue-950 text-white rounded-md" />
            </div>
          </div>
        </div>

        <div className=" py-4 px-10 flex-shrink-0 flex-grow-0 basis-[100%] border border-solid min-h-32 rounded-md shadow-xl bg-teal-50 flex items-center">
          <div className="flex-shrink-0 flex-grow-0 basis-[50%] flex flex-col items-center">
            <h2 className="font-mons font-semibold text-sm uppercase max-w-[80%]">
              Trade on the go on our dedicated web app
            </h2>

            <p className="text-[13px] max-w-[90%] text-gray-600 mt-3 font-mons font-medium">
              Experience seamless trading anytime, anywhere with our intuitive
              web apps. Stay updated with real-time market data, execute trades
              with ease, and access powerful tools right from your smartphone.
            </p>
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-[50%] bg-teal-100 rounded-md min-h-48 shadow-md">
            <div className="flex items-start justify-between px-6 py-4">
              <div className="flex flex-col gap-1">
                <p className="capitalize text-xs font-mons text-gray-400 font-semibold">
                  summary
                </p>
                <h1 className="font-bold capitalize font-mons">$1,876,580</h1>
              </div>
              <div className="flex gap-1 items-center">
                <p className="capitalize text-xs font-mons text-gray-400 font-semibold">
                  6 months
                </p>
                <ChevronDown className="text-gray-500" />
              </div>
            </div>

            <div className="w-full min-h-16">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnTrading;
