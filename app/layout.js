import { ppArial, ppPlus } from '../config/font'
import "./globals.css";

// const inter = Arial({ subsets: ["latin"] });

export const metadata = {
  title: "PEPEPEDRO",
  description: "Unique Crypto Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='shortcut icon ' href='/about.svg' type='image/x-icon' />
      
      <body className={`${ppArial.variable} ${ppPlus.variable}`}>{children}</body>
    </html>
  );
}
