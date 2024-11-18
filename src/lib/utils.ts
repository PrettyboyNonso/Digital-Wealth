import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
