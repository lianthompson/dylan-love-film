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
        <div className={"flex justify-between w-full cursor-pointer relative top-[32px] left-[32px]"}>
          <Link href="/">
          <div className={"flex justify-center"}>
            <Image
              className={"size-10 animate-[spin_10s_linear_infinite]"}
              src={"/favicon.png"}
              alt="favicon"
              width={40}
              height={40}
              priority
            />
            <div className={"flex items-center font-[family-name:var(--font-monoton)] pl-[18px]"}>
              DYLAN LOVE FILM
            </div>
            </div>
          </Link>
          <Image
            className={`${buttonToggled ? "size-8 cursor-pointer right-[310px]" : "cursor-pointer size-10 right-[62px]"} duration-180 ease-in-out flex absolute top-[4px]`}
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
