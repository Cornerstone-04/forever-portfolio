import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToJPG(imageURL?: string): string | undefined {
  if (!imageURL) return imageURL;

  if (imageURL.toLowerCase().endsWith(".heic")) {
    return `https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/${encodeURIComponent(imageURL)}`;
  }

  return imageURL;
}
