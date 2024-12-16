import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SingleValue, ActionMeta } from "react-select";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function createPayment(
  amount: string,
  currency: string,
  orderId: string
) {
  const BASE_URL = "https://api.cryptomus.com/v1";
  const API_KEY =
    "28gxbvZLzxm74A8hwil0Id6Dn9QsFzrq2HV5k8jBw3DZqVDqDkY61rEWjrqUbXTu9xV2LKM3Ir2ms5KSOYtG64jz4G2Bfx8qjsJ6ez1jJuDkmxvTf8F2FheUtNUxwReM";
  const MERCHANT_ID = "c0e8c0a6-73e3-4ae6-82da-c5634c40655e";
  try {
    const body = JSON.stringify({
      amount,
      currency,
      order_id: orderId,
    });
    const response = await fetch(`${BASE_URL}/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        merchant: MERCHANT_ID,
        sign: API_KEY,
      },
      body,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export interface HeroProps {
  head: string;
  paragraph: string;
  video: string;
  button: string;
  index: string;
}

export const RandInt = (min: number, max: number) => {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export interface CryptoDetails {
  id: string;
  name: string;
  symbol: string;
  hashing_algorithm: string | null;
  description: { [key: string]: string };
  categories: string[];
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
  };
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
  };
  market_data: {
    price_change_24h_in_currency: { usd: number };
    price_change_percentage_24h: number;
    current_price: { [key: string]: number };
    total_value_locked: number | null;
  };
  community_data: {
    facebook_likes: number | null;
    twitter_followers: number;
    reddit_average_posts_48h: number;
    reddit_subscribers: number;
  };
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  genesis_date: string;
  last_updated: string;
}

export function formatNumberWithCommas(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const cryptoOptions = [
  { value: "", label: "Crypto Pair" },
  { value: "usdt-tron", label: "USDT/TRON" },
  { value: "btc-eth", label: "BTC/ETH" },
  { value: "eth-usdt", label: "ETH/USDT" },
  { value: "bnb-btc", label: "BNB/BTC" },
  { value: "ltc-usdt", label: "LTC/USDT" },
  { value: "doge-btc", label: "DOGE/BTC" },
  { value: "sol-eth", label: "SOL/ETH" },
  { value: "xrp-usdt", label: "XRP/USDT" },
  { value: "ada-btc", label: "ADA/BTC" },
  { value: "dot-usdt", label: "DOT/USDT" },
];

type OptionType = {
  value: string;
  label: string;
};

export const handleChange = (
  selectedOption: SingleValue<OptionType>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _actionMeta: ActionMeta<OptionType>
) => {
  if (selectedOption) {
    console.log("Selected option:", selectedOption);
  } else {
    console.log("Selection cleared.");
  }
};

type LeverageOptionType = {
  value: string;
  label: string;
};

// Options for the Leverage select
export const leverageOptions: LeverageOptionType[] = [
  { value: "", label: "Leverage" },
  { value: "1x", label: "1x" },
  { value: "2x", label: "2x" },
  { value: "5x", label: "5x" },
  { value: "10x", label: "10x" },
  { value: "20x", label: "20x" },
  { value: "50x", label: "50x" },
  { value: "100x", label: "100x" },
];

type DaysOptionType = {
  value: string;
  label: string;
};

// Options for the Days select
export const daysOptions: DaysOptionType[] = [
  { value: "", label: "Day" },
  { value: "1", label: "1 Day" },
  { value: "2", label: "2 Days" },
  { value: "3", label: "3 Days" },
  { value: "4", label: "4 Days" },
  { value: "5", label: "5 Days" },
  { value: "6", label: "6 Days" },
  { value: "7", label: "7 Days" },
];

type WalletOptionType = {
  value: string;
  label: string;
};

export const walletOptions: WalletOptionType[] = [
  { value: "", label: "Wallet" },
];

type LoanFacilityOptionType = {
  value: string;
  label: string;
};

export const loanFacilityOptions: LoanFacilityOptionType[] = [
  { value: "personal-loan", label: "Personal Loan" },
  { value: "home-loan", label: "Home Loan" },
  { value: "car-loan", label: "Car Loan" },
  { value: "education-loan", label: "Education Loan" },
  { value: "business-loan", label: "Business Loan" },
];

type LoanDurationOptionType = {
  value: string;
  label: string;
};

export const loanDurationOptions: LoanDurationOptionType[] = [
  { value: "1-month", label: "1 Month" },
  { value: "3-months", label: "3 Months" },
  { value: "6-months", label: "6 Months" },
  { value: "9-months", label: "9 Months" },
  { value: "12-months", label: "12 Months" },
];
