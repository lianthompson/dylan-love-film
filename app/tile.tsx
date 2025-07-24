import Image from "next/image";

interface TileProps {
    imgSrc: string,
    title: string,
    description: string
}

export default function Tile({ imgSrc, title, description }: TileProps) {
    return (
        <div className="flex flex-col items-center w-[340px] h-[660px] p-[54px] font-[family-name:var(--font-molengo)] text-[#3B3B93] rounded-[32px] bg-[#3b3b93]/10 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
                src={imgSrc}
                alt={imgSrc}
                width={80}
                height={80}
                priority
            />
            <div className="mt-[16px] mb-[16px] text-[#3737C4]">
                {title}
            </div>
            <div className={"text-[#3B3B93]"}>{description}</div>
        </div>
    )
}