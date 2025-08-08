import { Geist, Geist_Mono, Monoton, Monda, Molengo } from "next/font/google";
import Image from "next/image";
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
        <Navbar />
        <div className={"flex w-full h-full"}>
          {children}
        </div>
        <div className="flex gap-[10px] justify-end mb-[32px] mr-[32px]">
          <Image src={"/instagram.svg"} alt="instagram" width={40} height={40} />
          <Image src={"/vimeo.svg"} alt="instagram" width={40} height={40} />
          <Image src={"/icons8-email-50.png"} alt="instagram" width={40} height={40} />
        </div>
      </body>
    </html>
  );
}
