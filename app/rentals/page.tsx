import Image from "next/image";
import Tile from "../tile";

export default function Home() {
    return (
        <div className="flex flex-col text-[#3B3B93] font-[family-name:var(--font-molengo)] ml-[40px] m-auto">
            <div className="flex align-center">
                <div className="flex flex-col items-center mr-48">
                    <Tile
                        imgSrc={"camera.svg"}
                        title={"Steadicam Packages"}
                        description={"We offer a variety of steadicam packages that include the latest camera technology and accessories to ensure smooth and professional footage. Our packages are customizable to fit your specific needs and budget."}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Tile
                        imgSrc={"lens.svg"}
                        title={"Camera, Lenses & Accessories"}
                        description={"We have a wide selection of cameras, lenses and accessories to enhance the quality of your footage. Our team can help you choose the right lenses and accessories for your project to ensure that you get the results you want."}
                    />
                </div>
            </div>
            <div className="flex align-center">
                <div className="flex flex-col items-center mr-48 mt-48">
                    <Tile
                        imgSrc={"light.svg"}
                        title={"Lighting, Power & Media"}
                        description={"We provide all the necessary lighting, power and media equipment to ensure that your shoot goes smoothly. From batteries to memory cards and exceptional lighting practices, we have you covered."}
                    />
                </div>
                <div className="flex flex-col items-center mt-48">
                    <Tile
                        imgSrc={"grip.svg"}
                        title={"Monitors"}
                        description={"We provide top-of-the-line monitors to ensure that you have a clear view of the footage as it is being captured. Our monitors are easy to use and come in a variety of sizes to fit your needs."}
                    />
                </div>
            </div>
        </div>
    );
}
