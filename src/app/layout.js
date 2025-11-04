import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SeaNeB – Empowering Local Businesses Digitally",
  description:
    "SeaNeB connects local businesses, entrepreneurs, and communities through digital platforms that drive sustainable growth, innovation, and empowerment.",
  keywords:
    "SeaNeB, digital business solutions, local businesses, entrepreneurship, innovation, growth, digital India, business network",
  authors: [{ name: "SeaNeB" }],

  icons: {
    icon: "favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
