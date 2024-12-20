import LoginContext from "@/context/LoginContext";
import { X } from "lucide-react";
import { useContext } from "react";

export const WalletPart = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { Walleterror, setError } = context;

  return (
    <div className="md:w-[30%] w-[90%] fixed top-[40%] z-50 shadow-2xl rounded-md left-[50%] -translate-x-[50%] bg-white border border-solid  px-4 py-6 flex flex-col gap-3">
      <X
        onClick={() => setError(null)}
        className="text-black cursor-pointer self-end"
      />
      <div className="w-full items-center flex justify-between">
        <p
          className={`font-mons text-sm font-bold capitalize ${
            Walleterror ===
            "You have successfully connected your wallet, you can proceed to make a deposit."
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {Walleterror}
        </p>
      </div>
    </div>
  );
};
