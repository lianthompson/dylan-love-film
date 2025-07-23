import Image from "next/image";

export default function About() {
    return (
        <main className="flex flex-col items-center content-center">
            <Image
                src={"light.svg"}
                alt="light"
                width={80}
                height={80}
                priority
            />
        </main>
    );
}