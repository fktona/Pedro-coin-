import { M_PLUS_Rounded_1c } from "next/font/google";
import localFont from 'next/font/local'

export const ppPlus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-Plus",
  weight:'800'
});

export const ppArial = localFont({
  src:"./rarial.ttf",
  variable:"--font-Rarial"
})