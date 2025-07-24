import Tile from "../tile";

export default function Rentals() {
    return (
        <div className="flex gap-[48px] h-full m-auto items-center">
            <Tile
                imgSrc={"camera.svg"}
                title={"Steadicam Packages"}
                description={"We offer a variety of steadicam packages that include the latest camera technology and accessories to ensure smooth and professional footage. Our packages are customizable to fit your specific needs and budget."}
            />
            <Tile
                imgSrc={"lens.svg"}
                title={"Camera, Lenses & Accessories"}
                description={"We have a wide selection of cameras, lenses and accessories to enhance the quality of your footage. Our team can help you choose the right lenses and accessories for your project to ensure that you get the results you want."}
            />
            <Tile
                imgSrc={"light.svg"}
                title={"Lighting, Power & Media"}
                description={"We provide all the necessary lighting, power and media equipment to ensure that your shoot goes smoothly. From batteries to memory cards and exceptional lighting practices, we have you covered."}
            />
            <Tile
                imgSrc={"grip.svg"}
                title={"Monitors"}
                description={"We provide top-of-the-line monitors to ensure that you have a clear view of the footage as it is being captured. Our monitors are easy to use and come in a variety of sizes to fit your needs."}
            />
        </div>
    );
}
