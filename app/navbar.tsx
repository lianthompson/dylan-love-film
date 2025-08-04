"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={"absolute z-10 w-full"}>
            <div className={"relative flex flex-row justify-between m-[32px] z-10"}>
            <Link href="/">
                <div className={"flex justify-center cursor-pointer"}>
                    <Image
                        className={"size-10 animate-[spin_10s_linear_infinite] cursor-pointer"}
                        src={"/favicon.png"}
                        alt="favicon"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className={"flex items-center font-[family-name:var(--font-monoton)] pl-[18px] cursor-pointer"}>
                        DYLAN LOVE FILM
                    </div>
                </div>
            </Link>
            <div className={"flex flex-row items-center font-[family-name:var(--font-monda)] text-2xl gap-[18px] cursor-pointer"}>
                <div className={`${pathname === "/commercial" && "text-[#6969E4]"}`}>
                    <Link href="/commercial">Commercial</Link>
                </div>
                <div className={`${pathname === "/documentary" && "text-[#6969E4]"}`}>
                    <Link href="/documentary">Documentary</Link>
                </div>
                <div className={`${pathname === "/narrative" && "text-[#6969E4]"}`}>
                    <Link href="/narrative">Narrative</Link>
                </div>
                <div className={`${pathname === "/rentals" && "text-[#6969E4]"}`}>
                    <Link href="/rentals">Rentals</Link>
                </div>
                <div className={`${pathname === "/about" && "text-[#6969E4]"}`}>
                    <Link href="/about">About</Link>
                </div>
                <div className={`${pathname === "/contact" && "text-[#6969E4]"}`}>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            </div>
        </div>
    );
}