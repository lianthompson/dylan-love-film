'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuProps {
    buttonToggled: boolean
}

export default function Menu({ buttonToggled }: MenuProps) {

    const pathname = usePathname();

    return (
        <div className="font-[family-name:var(--font-monda)] text-3xl flex absolute top-[32px] right-[32px] absolute">
            <div>
            </div>
            {buttonToggled &&
                <div>
                    <div>
                        <div className={`${pathname === "/motion" && "text-[#6969E4]"} mb-[20px] hover:[#55555AD]`}>
                            <Link href="/motion" className="hover:#7070B8">Motion</Link>
                        </div>
                        {<div>
                            <div className={`${pathname === "/motion/commercial" && "text-[#6969E4]"} mb-[20px] ml-[28px]`}>
                                <Link href="/motion/commercial">Commercial</Link>
                            </div>
                            <div className={`${pathname === "/motion/documentary" && "text-[#6969E4]"} mb-[20px] ml-[28px]`}>
                                <Link href="/motion/documentary">Documentary</Link>
                            </div>
                            <div className={`${pathname === "/motion/narrative" && "text-[#6969E4]"} mb-[20px] ml-[28px]`}>
                                <Link href="/motion/narrative">Narrative</Link>
                            </div>
                        </div>}
                    </div>
                    <div className={`${pathname === "/rentals" && "text-[#6969E4]"} mb-[20px]`}>
                        <Link href="/rentals">Rentals</Link>
                    </div>
                    <div className={`${pathname === "/about" && "text-[#6969E4]"} mb-[20px]`}>
                        <Link href="/about">About</Link>
                    </div>
                    <div className={`${pathname === "/contact" && "text-[#6969E4]"} mb-[20px]`}>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>}
        </div>
    )
}