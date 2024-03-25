import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMetadataRootURL() {
  switch (process.env.VERCEL_ENV) {
    case 'production':
      return new URL(`${process.env.NEXT_PUBLIC_WEB_URL}`)
    case 'preview':
      return new URL(`https://${process.env.VERCEL_URL}`)
    default:
      return new URL(`http://localhost:${process.env.PORT || 3000}`)
  }
}
