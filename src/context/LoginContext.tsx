import { CryptoDetails } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import Web3 from "web3";
import React, {
  createContext,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { RegisteredSubscription } from "node_modules/web3-eth/lib/types/web3_eth";

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
  wallet_address: string;
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
  connectWallet: () => void;
  handleDeposit: (e: FormEvent<HTMLFormElement>) => void;
  setInputval: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  inputval: string;
  Walleterror: string | null;
  depositError: string;
  loading: boolean;
  fetchUser: () => void;
  checkWalletConnection: () => void;
  totalbal: string;
  wallet: {
    wallet_address: string;
    account_balance: string;
    web3: Web3<RegisteredSubscription>;
  };
  FetchWallet: () => void;
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
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : "";
  });
  const [wallet, setWallet] = useState(() => {
    const storedWallet = localStorage.getItem("web3");
    return storedWallet ? JSON.parse(storedWallet) : "";
  });

  const [inputval, setInputval] = useState("0.00");
  const [totalbal, setTotalBal] = useState("0.00");
  const [Walleterror, setError] = useState<string | null>(null);
  const [depositError, setDepositError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [web3, setWeb3] = useState<Web3 | null>(null);
  // const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const adminWalletAddress = "0x4ab174852c8b9c8973e7D1165067c0A874dec9a6";

  async function FetchWallet() {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
      const isExpired = Date.now() >= tokenPayload.exp * 1000;

      if (isExpired) {
        accessToken = await refreshToken();
      }

      const response = await fetch(
        `https://digital-wealth.onrender.com/core/wallet/by-user/?user_id=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const walletData = data.wallet;
        setWallet(walletData);
        localStorage.setItem("web3", JSON.stringify(walletData));
        console.log(walletData);
      } else {
        console.log(response.status);
      }
    } else {
      window.location.href = "/login";
    }
  }

  async function refreshToken() {
    const token = localStorage.getItem("refreshToken");
    if (!token) window.location.href = "/login";
    const response = await fetch("/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: token }),
    });

    if (!response.ok) throw new Error("failed to refresh token");
    const result = await response.json();
    const newAccessToken = result.access;
    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
      return newAccessToken;
    } else {
      throw new Error("new access token failed to fetch");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        const walletAddress = accounts[0];

        if (!walletAddress)
          throw new Error("Failed to retrieve wallet address.");

        console.log(walletAddress, web3Instance);

        let accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
          const isExpired = Date.now() >= tokenPayload.exp * 1000;

          if (isExpired) {
            accessToken = await refreshToken();
          }

          // Update wallet address
          const patchResponse = await fetch(
            `https://digital-wealth.onrender.com/core/wallet/${wallet.id}/`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify({
                wallet_address: walletAddress,
              }),
            }
          );

          if (!patchResponse.ok)
            throw new Error("Failed to update wallet address.");
          setError(
            "You have successfully connected your wallet, you can proceed to make a deposit."
          );
        } else {
          window.location.href = "/login";
        }
      } catch (error) {
        // setError(
        //   error.message || "An error occurred while connecting the wallet."
        // );
        console.error("Error:", error);
      }
    } else {
      setError("MetaMask is not installed. Please install it.");
    }
  }

  const checkWalletConnection = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const web3Instance = new Web3(window.ethereum);
        const accounts = await web3Instance.eth.getAccounts();

        if (accounts.length === 0) {
          let accessToken = localStorage.getItem("accessToken");

          if (!accessToken) {
            window.location.href = "/login";
            return;
          }

          const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
          const isExpired = Date.now() >= tokenPayload.exp * 1000;

          if (isExpired) {
            accessToken = await refreshToken();
          }

          // Fetch current wallet address from the API
          const userResponse = await fetch(
            `https://digital-wealth.onrender.com/core/wallet/by-user/?user_id=${userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (!userResponse.ok) {
            console.error("Failed to fetch user data.");
            return;
          }

          const userData = await userResponse.json();

          // Check if wallet address is already empty
          if (userData.wallet_address === "") {
            console.log("Wallet address is already empty. No action needed.");
            return;
          }

          // Reset the wallet address to an empty string
          const patchResponse = await fetch(
            `https://digital-wealth.onrender.com/core/wallet/${wallet.id}/`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify({ wallet_address: "" }),
            }
          );

          if (!patchResponse.ok) {
            console.error("Failed to reset wallet address.");
          } else {
            console.log(
              "Wallet address successfully reset to an empty string."
            );
          }
        } else {
          console.log("Wallet is connected:", accounts[0]);
        }
      } else {
        console.error("Ethereum provider not detected.");
      }
    } catch (error) {
      console.error("Error while checking wallet connection:", error);
    }
  };

  const handleDeposit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FetchWallet();
    const address = wallet.wallet_address;
    if (address !== "") {
      const web3Instance = new Web3(window.ethereum);
      if (parseFloat(inputval) <= 0) {
        setDepositError("Please enter a valid amount greater than 0.");
        return;
      }

      try {
        setLoading(true);

        // Check current balance
        const balanceInWei = await web3Instance.eth.getBalance(address);

        const gasPrice = await web3Instance.eth.getGasPrice();
        const gasLimit = 21000; // Standard gas limit for simple transfer

        const amountInWei = Web3.utils.toWei(inputval, "ether");

        const totalTransactionCost = (
          BigInt(amountInWei) +
          BigInt(gasPrice) * BigInt(gasLimit)
        ).toString();

        setTotalBal(totalTransactionCost);
        if (BigInt(balanceInWei) < BigInt(totalTransactionCost)) {
          setDepositError(
            "Insufficient funds for the transaction and gas fees."
          );
          return;
        }

        const response = await web3Instance.eth.sendTransaction({
          from: address,
          to: adminWalletAddress,
          value: amountInWei,
        });

        if (response && response.transactionHash) {
          // const balanceResponse = await
          setDepositError("Deposit sent successfully!");
          setInputval("0.00");
        }
      } catch (err) {
        setError("Transaction failed. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      setDepositError("Please connect your wallet first.");
      return;
    }
  };

  const apiKey = import.meta.env.VITE_STOCK_API;
  const fetchStockData = async (symbol: string) => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`
    );
    const data = await response.json();
    setStockData(data["Weekly Adjusted Time Series"]);
    // console.log(data);
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
          FetchWallet();
          console.log(wallet);
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

  async function fetchUser() {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]));
      const isExpired = Date.now() >= tokenPayload.exp * 1000;
      if (isExpired) {
        accessToken = await refreshToken();
      }

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
          throw new Error(errorData.message || "An error occurred");
        }
        const data = await response.json();
        // console.log("Fetched data:", data);
        // console.log(userData);
        localStorage.setItem("userData", JSON.stringify(data));
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

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
    connectWallet,
    inputval,
    setInputval,
    handleDeposit,
    loading,
    depositError,
    Walleterror,
    setError,
    fetchUser,
    checkWalletConnection,
    totalbal,
    wallet,
    FetchWallet,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};
