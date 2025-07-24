import { Geist, Geist_Mono, Monoton, Monda, Molengo } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monoton = Monoton({
  variable: "--font-monoton",
  display: 'swap',
  subsets: ["latin"],
  weight: ['400']
});

const monda = Monda({
  variable: "--font-monda",
  display: 'swap',
  subsets: ["latin"],
  weight: ['400']
});

const molengo = Molengo({
  variable: "--font-molengo",
  display: 'swap',
  subsets: ["latin"],
  weight: ['400']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} ${monda.variable} ${molengo.variable} antialiased flex flex-col h-screen`}
      >
        <Navbar/>
        {/* <div className={"flex flex-col w-full items-center justify-center"}> */}
        <div className={"flex w-full h-full"}>
          {children}
        </div>
      </body>
    </html>
  );
}
