import "./globals.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import LoadingScreen from "../components/LoadingScreen";
import { SITE_URL } from "./seo";

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
  metadataBase: new URL(SITE_URL),
  title: "Swastik Boats | Racing Rowing Shells Made in India",
  description:
    "Racing rowing shells, training boats, and spare parts from Swastik Boats in Pune, India.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}