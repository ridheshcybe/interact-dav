import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isUpcoming(date) {
  const eventDate = date;
  const now = new Date();
  return eventDate > now;
}