import { useEffect, useState } from "react";
import AboutPage from "./About/AboutPage";
import ContactPage from "./contact/Contact";
import Home from "./home/Home";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Footer from "./reuseables/Footer";
import Header from "./reuseables/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RandInt } from "./lib/utils";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
export interface stateFunc {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [sec, setSec] = useState(RandInt(1, 5));
  const [currentWinner, setCurrentWinner] = useState({ name: "", money: 0 });
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
    const newRand = RandInt(5, 15);
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

  const Winners = ({
    userData,
  }: {
    userData: { name: string; money: number };
  }) => {
    return (
      <div className="flex gap-3 fixed px-2 py-1 min-w-32 min-h-16 max-w-fit max-h-fit bg-black md:top-96 top-[500px] z-50 rounded-lg border border-orange-400 items-center">
        <div className="flex-grow-0 flex-shrink-0">
          <CurrencyDollarIcon className="text-white w-10 h-12" />
        </div>
        <div className="flex-shrink-0 flex-grow-0 basis-[50%]">
          <h2 className="font-mons text-white text-xs capitalize">
            yay!! <span className="text-green-600">{userData.name}</span> just
            won <span className="text-green-600">{`$${userData.money}`}</span>
          </h2>
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Header setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
      <main className="relative">
        {currentWinner.name !== "" && currentWinner.money !== 0 && (
          <Winners userData={currentWinner} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
