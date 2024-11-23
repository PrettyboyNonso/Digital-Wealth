import { CryptoDetails } from "@/lib/utils";
import React, {
  createContext,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface LoginContextType {
  registerFunction: (e: FormEvent<HTMLFormElement>) => void;
  errorMessage: string;
  successMessage: string;
  loginFunc: (e: FormEvent<HTMLFormElement>) => void;
  LoginerrorMessage: string;
  assetState: CryptoDetails[];
  getCrypto: (...ids: string[]) => void;
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
  sectionArray: React.MutableRefObject<(HTMLElement | null)[]>;
}
const LoginContext = createContext<LoginContextType | null>(null);

export default LoginContext;

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [LoginerrorMessage, setLoginErrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const [assetState, setAssetState] = useState<CryptoDetails[]>([]);
  const [isActive, setIsActive] = useState("home");
  const sectionArray = useRef<(HTMLElement | null)[]>([]);

  const getCrypto = async (...ids: string[]) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-BFZ4VisezRhHydG8AwE61kVa",
      },
    };
    const assets = [];
    for (const id of ids) {
      try {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        const response = await fetch(url, options);
        const data = await response.json();
        assets.push(data);
      } catch (error) {
        console.log(error);
      }
    }

    setAssetState(assets);
    console.log(assetState);
  };

  useEffect(() => {
    getCrypto(
      "bitcoin",
      "ethereum",
      "binancecoin",
      "cardano",
      "solana",
      "ripple",
      "dogecoin",
      "polkadot",
      "litecoin",
      "tron",
      "shiba-inu",
      "avalanche-2",
      "chainlink",
      "uniswap",
      "vechain"
    );
  }, []);

  /* this function does the basic javascript auth and returns an object 
        {fullName: fullName,
         userEmail: userEmail,
        userPassword: userPassword,
        authenticated: true,
        }  */
  const authenticateLogin = (e: FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    if (userEmail.trim() !== "" && userPassword.trim() !== "") {
      if (!emailRegex.test(userEmail)) {
        setLoginErrorMessage("Please enter a valid email");
        return;
      }
      setLoginErrorMessage("");
      return {
        userEmail: userEmail,
        userPassword: userPassword,
        authenticated: true,
      };
    } else {
      setLoginErrorMessage("You cannot have an empty field");
    }
  };

  {
    /* this function does the basic javascript auth and returns an object 
    {fullName: fullName,
        userEmail: userEmail,
        userPassword: userPassword,
        confirmPassword: confirmPassword,
        authenticated: true,}  */
  }
  const authenticateRegister = (e: FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fullName = form.username.value;
    const userEmail = form.userEmail.value;
    const userPassword = form.userPassword.value;
    const confirmPassword = form.confirmPassword.value;
    if (
      fullName.trim() !== "" &&
      userEmail.trim() !== "" &&
      userPassword.trim() !== "" &&
      confirmPassword.trim() !== ""
    ) {
      if (!emailRegex.test(userEmail)) {
        setErrorMessage("Please enter a valid email");
        return;
      }
      if (userPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      setErrorMessage("");

      return {
        fullName: fullName,
        userEmail: userEmail,
        userPassword: userPassword,
        confirmPassword: confirmPassword,
        authenticated: true,
      };
    } else {
      setErrorMessage("You left some fields empty");
    }
  };

  // beginning of register function, this is the function called when you click "register button"
  const registerFunction = async (e: FormEvent<HTMLFormElement>) => {
    const details = authenticateRegister(e); // details is an object returned from the authenticateRegister function
    if (details?.authenticated) {
      const response = await fetch("endpoint goes here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: details.fullName,
          email: details.userEmail,
          password: details.confirmPassword,
        }),
      });

      if (response.ok) {
        // setsuccessMessage(
        //   "An email has been sent to your gmail account, proceed there for further confirmation"
        // );
        console.log(response.status); // you should get 200 in the console
      } else {
        throw new Error("An error occured");
      }
    }
  };

  const loginFunc = async (e: FormEvent<HTMLFormElement>) => {
    const details = authenticateLogin(e);
    if (details) {
      const response = await fetch("endpoint goes here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: details.userEmail,
          password: details.userPassword,
        }),
      });

      if (response.ok) {
        console.log("Worked well");
      } else {
        throw new Error("an error occured");
      }
    }
  };

  const values = {
    registerFunction,
    errorMessage,
    successMessage,
    LoginerrorMessage,
    loginFunc,
    assetState,
    getCrypto,
    isActive,
    setIsActive,
    sectionArray,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};
