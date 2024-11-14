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
