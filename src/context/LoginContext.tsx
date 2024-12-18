import { CryptoDetails } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import React, {
  createContext,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type StockData = {
  [date: string]: {
    1: string; // open price
    2: string; // high price
    3: string; // low price
    4: string; // close price
    5: string; // adjusted close price
  };
};

interface User {
  id: number;
  name: string;
  email: string;
  account_balance: number;
}

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
  fetchStockData: (symbol: string) => void;
  stockData: StockData;
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedin: boolean;
  setisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  registerLoading: boolean;
  setRegisterLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginLoading: boolean;
  setLoginLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
  userData: User;
}

interface DecodedToken {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
}
const LoginContext = createContext<LoginContextType | null>(null);

export default LoginContext;

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [LoginerrorMessage, setLoginErrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const [assetState, setAssetState] = useState<CryptoDetails[]>([]);
  const [isActive, setIsActive] = useState("");
  const sectionArray = useRef<(HTMLElement | null)[]>([]);
  const [stockData, setStockData] = useState({});
  const [admin, setAdmin] = useState(false);
  const [isLoggedin, setisLoggedIn] = useState(() => {
    return localStorage.getItem("accessToken") ? true : false;
  });
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [userId] = useState<string>(() => {
    const storedUserId = localStorage.getItem("userId");
    return storedUserId ? JSON.parse(storedUserId) : "";
  });
  const [userData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : "";
  });

  const apiKey = import.meta.env.VITE_STOCK_API;
  const fetchStockData = async (symbol: string) => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`
    );
    const data = await response.json();
    setStockData(data["Weekly Adjusted Time Series"]);
    console.log(data);
  };

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
        name: fullName,
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
    setRegisterLoading(true);
    const details = authenticateRegister(e);
    if (details?.authenticated) {
      const requestData = {
        name: details.name,
        email: details.userEmail,
        password: details.userPassword,
      };
      try {
        const response = await axios.post(
          "https://digital-wealth.onrender.com/auth/users/",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 201) {
          setRegisterLoading(false);
          setsuccessMessage(
            "You have successfully registered, proceed to login"
          );
        }
      } catch (error) {
        setRegisterLoading(false);
        if (error instanceof AxiosError && error.response) {
          const errorData = error.response.data as { [key: string]: string[] };

          const emailErrors = errorData.email?.join(", ");
          const passwordErrors = errorData.password?.join(", ");

          if (emailErrors) {
            setErrorMessage(emailErrors);
          }
          if (passwordErrors) {
            setErrorMessage(passwordErrors);
          }
        } else {
          console.error("An unexpected error occurred.", error);
        }
      }
    } else {
      setRegisterLoading(false);
    }
  };

  const loginFunc = async (e: FormEvent<HTMLFormElement>) => {
    setLoginLoading(true);
    const details = authenticateLogin(e);
    if (details) {
      const response = await fetch(
        "https://digital-wealth.onrender.com/auth/jwt/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: details.userEmail,
            password: details.userPassword,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("accessToken", data.access);
        const decoded: DecodedToken = jwtDecode(data.access);

        console.log(decoded);
        localStorage.setItem("userId", JSON.stringify(decoded.user_id));
        const accessToken = localStorage.getItem("accessToken") || "";
        // const authHeader = `Bearer ${
        //   accessToken ? JSON.parse(accessToken) : ""
        // }`;
        try {
          const response = await fetch(
            `https://digital-wealth.onrender.com/auth/users/${userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            console.error("Failed to fetch:", errorData);
            setLoginErrorMessage(errorData.message);
            throw new Error(errorData.message || "An error occurred");
          }
          const data = await response.json();
          console.log("Fetched data:", data);
          localStorage.setItem("userData", JSON.stringify(data));
          setLoginLoading(false);
          window.location.href = "/dashboard";
        } catch (error) {
          console.log(error);
        }
      } else {
        setLoginLoading(false);
        const data = await response.json();
        console.log(data);
        setLoginErrorMessage(data.detail);
      }
    } else {
      setLoginLoading(false);
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
    fetchStockData,
    stockData,
    admin,
    setAdmin,
    isLoggedin,
    setisLoggedIn,
    registerLoading,
    setRegisterLoading,
    loginLoading,
    setLoginLoading,
    userId,
    userData,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};
