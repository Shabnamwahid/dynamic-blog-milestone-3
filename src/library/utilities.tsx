

import { clsx, type ClassValue } from "clsx"; 
import { twMerge } from "tailwind-merge";    


export function cn(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}


export function mergeClasses(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}


