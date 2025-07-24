import Image from "next/image";

interface TileProps {
    imgSrc: string,
    title: string,
    description: string
}

export default function Tile({ imgSrc, title, description }: TileProps) {
    return (
        <div className="flex flex-col items-center mr-48">
            <Image
                src={imgSrc}
                alt={imgSrc}
                width={80}
                height={80}
                priority
            />
            <div className="mt-[16px] mb-[16px]">
                {title}
            </div>
            <div>{description}</div>
        </div>
    )
}