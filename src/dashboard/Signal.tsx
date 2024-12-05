// import React, { useState, useEffect } from "react";
// import { ChartCanvas, Chart, CandlestickSeries } from "react-financial-charts";
// import { scaleTime } from "d3-scale";
// import { utcDay } from "d3-time";
// import axios from "axios";

// const SignalPage: React.FC = () => {
//   const [tradePair, setTradePair] = useState("BTC/USD");
//   const [chartData, setChartData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.coingecko.com/api/v3/coins/bitcoin/ohlc",
//           {
//             params: {
//               vs_currency: "usd",
//               days: 1,
//             },
//           }
//         );

//         const formattedData = response.data.map((d: any) => ({
//           date: new Date(d[0]),
//           open: d[1],
//           high: d[2],
//           low: d[3],
//           close: d[4],
//         }));

//         setChartData(formattedData);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       }
//     };

//     fetchChartData();
//   }, [tradePair]);

//   return (
//     <div className="flex h-screen bg-gray-100 font-mono text-sm">
//       {/* Left Panel: Signals Feed */}
//       <aside className="w-1/4 p-4 bg-white border-r overflow-y-auto">
//         <h2 className="text-lg font-semibold mb-4">Trading Signals</h2>
//         <div className="space-y-4">
//           {[
//             {
//               pair: "BTC/USD",
//               action: "Buy",
//               entry: "28,000",
//               tp: "30,000",
//               sl: "27,000",
//             },
//             {
//               pair: "ETH/USD",
//               action: "Sell",
//               entry: "1,800",
//               tp: "1,600",
//               sl: "1,900",
//             },
//           ].map((signal, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
//               onClick={() => setTradePair(signal.pair)}
//             >
//               <p className="font-bold">{signal.pair}</p>
//               <p>
//                 Signal:{" "}
//                 <span
//                   className={
//                     signal.action === "Buy" ? "text-green-600" : "text-red-600"
//                   }
//                 >
//                   {signal.action}
//                 </span>
//               </p>
//               <p>Entry: {signal.entry}</p>
//               <p>
//                 TP: {signal.tp} | SL: {signal.sl}
//               </p>
//             </div>
//           ))}
//         </div>
//       </aside>

//       {/* Center Panel: Trading Chart */}
//       <main className="flex-grow p-4">
//         <h2 className="text-lg font-semibold mb-4">
//           Market Chart ({tradePair})
//         </h2>
//         <div className="w-full h-[70vh] bg-white p-4 rounded-lg shadow-lg">
//           {chartData.length > 0 ? (
//             <ChartCanvas
//               height={400}
//               width={700}
//               ratio={1}
//               seriesName={tradePair}
//               data={chartData}
//               xAccessor={(d) => d.date}
//               xScale={scaleTime()}
//               xExtents={[
//                 utcDay.offset(chartData[0].date, -1),
//                 utcDay.offset(chartData[chartData.length - 1].date, 1),
//               ]}
//             >
//               <Chart id={0} yExtents={(d) => [d.high, d.low]}>
//                 <CandlestickSeries />
//               </Chart>
//             </ChartCanvas>
//           ) : (
//             <p>Loading chart data...</p>
//           )}
//         </div>
//       </main>

//       {/* Right Panel: Trade Controls */}
//       <aside className="w-1/4 p-4 bg-white border-l">
//         <h2 className="text-lg font-semibold mb-4">Trade Controls</h2>
//         <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//           <div>
//             <label className="block font-bold mb-1" htmlFor="orderType">
//               Order Type
//             </label>
//             <select id="orderType" className="w-full p-2 border rounded">
//               <option value="market">Market</option>
//               <option value="limit">Limit</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-bold mb-1" htmlFor="tradeAction">
//               Action
//             </label>
//             <select id="tradeAction" className="w-full p-2 border rounded">
//               <option value="Buy">Buy</option>
//               <option value="Sell">Sell</option>
//             </select>
//           </div>
//           <button
//             type="button"
//             className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Execute Trade
//           </button>
//         </form>
//       </aside>
//     </div>
//   );
// };

// export default SignalPage;
