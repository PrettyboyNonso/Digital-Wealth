import React, { useState, useEffect, useRef } from "react";
import { ChartCanvas, Chart, CandlestickSeries } from "react-financial-charts";
import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";
import axios from "axios";

// Type definitions for chart data
interface ChartData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ApiResponse {
  // Define the expected structure of the data returned by the API
  ohlc: Array<[number, number, number, number, number]>; // [timestamp, open, high, low, close]
}

const ChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [width, setWidth] = useState<number>(0);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://api.coingecko.com/api/v3/coins/bitcoin/ohlc",
          {
            params: { vs_currency: "usd", days: 1 },
          }
        );

        const formattedData: ChartData[] = response.data.ohlc.map((d) => ({
          date: new Date(d[0]),
          open: d[1],
          high: d[2],
          low: d[3],
          close: d[4],
        }));

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setWidth(chartContainerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial calculation

    const resizeObserver = new ResizeObserver(handleResize);
    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={chartContainerRef} className="w-full max-h-[400px] min-h-20">
      {chartData.length > 0 && width > 0 ? (
        <ChartCanvas
          height={400}
          width={width}
          ratio={1}
          seriesName="BTC/USD"
          data={chartData}
          xAccessor={(d) => d.date}
          xScale={scaleTime()}
          xExtents={[
            utcDay.offset(chartData[0].date, -1),
            utcDay.offset(chartData[chartData.length - 1].date, 1),
          ]}
        >
          <Chart id={0} yExtents={(d) => [d.high, d.low]}>
            <CandlestickSeries candleStrokeWidth={2} />{" "}
            {/* Adjust width here */}
          </Chart>
        </ChartCanvas>
      ) : (
        <p className="text-center font-mono text-green-600 text-xs">
          Loading chart data...
        </p>
      )}
    </div>
  );
};

export default ChartComponent;
