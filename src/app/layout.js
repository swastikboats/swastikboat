import "./globals.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Header from "@/components/Header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

export const metadata = {
  title: "Sagar Boats",
  description: "Precision Boats Built for Performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <Header />
        <main className="siteContent">{children}</main>
      </body>
    </html>
  );
}