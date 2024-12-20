import LoginContext from "@/context/LoginContext";
import { ArrowRight, Wallet } from "lucide-react";
import { useContext } from "react";

const Connect = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { connectWallet, wallet } = context;

  return (
    <div
      className={`${"flex"} bg-blue-600 py-4 min-h-fit rounded-md flex-shrink-0  flex-grow-0 basis-[48%] border border-solid flex-col items-center mt-8`}
    >
      <Wallet className="text-white w-5 h-5" />
      <h1 className="text-white font-mono font-semibold capitalize lg:text-base text-sm">
        connect wallet
      </h1>
      <p className="text-white mt-1 text-xs font-mono font-bold capitalize">
        connect wallet and make deposits easily
      </p>

      {wallet.wallet_address === "" ? (
        <button
          className="mt-6 bg-white lg:px-5 py-2 px-4 capitalize font-mono text-xs rounded-md  font-bold flex gap-1 items-center"
          onClick={connectWallet}
        >
          connect now
          <ArrowRight />
        </button>
      ) : (
        <p className="capitalize font-bold font-mons text-green-500 mt-2 text-xs">
          connected
        </p>
      )}
    </div>
  );
};

export default Connect;
