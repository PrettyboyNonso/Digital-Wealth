import { formatNumberWithCommas, RandInt } from "@/lib/utils";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Winners = () => {
  const [currentWinner, setCurrentWinner] = useState({ name: "", money: 0 });
  const [sec, setSec] = useState(() => RandInt(1, 5));

  const FetchUsers = async () => {
    const url = "https://randomuser.me/api/";
    const jsonResponse = await fetch(url);
    const data = await jsonResponse.json();
    const userResult = data.results[0];
    const firstName = userResult.name.first;
    const lastName = userResult.name.last;
    return `${firstName} ${lastName}`;
  };

  async function getWinnings() {
    const newRand = RandInt(5, 10);
    const moneyWon = RandInt(1500, 21500);
    const winnerName = await FetchUsers();
    setCurrentWinner({
      name: winnerName,
      money: moneyWon,
    });
    setSec(newRand);
    setTimeout(() => {
      setCurrentWinner({
        name: "",
        money: 0,
      });
    }, 3000);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getWinnings();
    }, sec * 1000);
    return () => clearInterval(interval);
  }, [sec]);
  return (
    <div
      className={`${
        currentWinner.money === 0 && currentWinner.name === ""
          ? "opacity-0"
          : "opacity-1"
      } flex gap-3 fixed px-2 py-2 min-h-7 max-w-48 bg-black md:top-96 top-[500px] z-40 rounded-lg border border-orange-400 items-center`}
    >
      <div className="flex-grow-0 flex-shrink-0 basis-[20%]">
        <CurrencyDollarIcon className="text-white w-8 h-8" />
      </div>
      <div className="flex-shrink-0 flex-grow-0 basis-[70%]">
        <h2 className="font-mons text-white text-xs capitalize overflow-hidden">
          <span className="text-green-600">{currentWinner.name}</span> just
          earned{" "}
          <span className="text-green-600">{`$${formatNumberWithCommas(
            currentWinner.money
          )}`}</span>
        </h2>
      </div>
    </div>
  );
};

export default Winners;
