'use client';
import Link from 'next/link';
import Image from "next/image";
import { Geist, Geist_Mono, Monoton, Monda, Molengo } from "next/font/google";
import { useState } from 'react';
import Menu from "./menu";
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

  const [ buttonToggled, toggleMenu ] = useState(false);

  const handleMenuClick = () => {
    toggleMenu(!buttonToggled);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} ${monda.variable} ${molengo.variable} antialiased`}
      >
        <div className={"flex justify-between absolute w-full"}>
          <Link href="/">
            <Image
              // className={"flex justify-end cursor-pointer size-10 left-[48px] absolute top-[48px]"}
              className={"flex justify-end cursor-pointer size-10 relative top-[32px] left-[32px]"}
              src={"/favicon.png"}
              alt="hamburger menu"
              width={40}
              height={40}
              priority
            />
          </Link>
          <Image
            // className={`${buttonToggled ? "size-8 cursor-pointer mr-8 right-[270px]" : "flex justify-end cursor-pointer size-10 right-[48px]"} duration-180 ease-in-out flex absolute top-[48px]`}
            className={`${buttonToggled ? "size-8 cursor-pointer right-[290px]" : "flex justify-end cursor-pointer size-10 right-[32px]"} duration-180 ease-in-out flex relative top-[32px]`}
            src={buttonToggled ? "/X.svg" : "/hamburger.svg"}
            alt="hamburger menu"
            width={40}
            height={40}
            priority
            onClick={handleMenuClick}
          />
        </div>
        <Menu buttonToggled={buttonToggled} />
        <div className={buttonToggled ? "flex flex-col w-full h-screen min-h-screen p-8 pb-20 pr-[360px]" : "flex flex-col w-full h-screen min-h-screen p-8 pb-20"}>
          {children}
        </div>
      </body>
    </html>
  );
}
