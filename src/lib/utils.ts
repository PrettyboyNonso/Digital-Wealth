import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SingleValue, ActionMeta } from "react-select";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
