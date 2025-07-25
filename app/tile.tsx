'use client';
import { useState } from 'react';
import Image from "next/image";

interface TileProps {
    imgSrc: string,
    title: string,
    description: string,
    rentalList: string[]
}

export default function Tile({ imgSrc, title, description, rentalList }: TileProps) {

    const [ expandList, toggleExpand ] = useState(false);

    return (
        <div className="flex flex-col items-center justify-between w-[340px] min-h-[660px] p-[54px] font-[family-name:var(--font-molengo)] text-[#3B3B93] rounded-[32px] bg-[#3b3b93]/10 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="flex flex-col items-center">
                <Image
                    src={imgSrc}
                    alt={imgSrc}
                    width={80}
                    height={80}
                    priority
                />
                <div className="mt-[56px] mb-[16px] text-[#3737C4]">
                    {title}
                </div>
                <div className={"text-[#3B3B93] flex text-center min-h-[200px]"}>{description}</div>
            </div>
            <div onClick={()=> toggleExpand(!expandList)} className={`${expandList && "pt-[102px]"} flex flex-col items-center italic cursor-pointer pb-[40px]}`}>
                <div className="pb-[20px]">See full list</div>
                <Image
                    src={"/icons8-down-arrow-50.png"}
                    alt={imgSrc}
                    width={30}
                    height={30}
                    priority
                />
            </div>
            {expandList &&
                <div>
                    {rentalList}
                </div>
            }
        </div>
    )
}