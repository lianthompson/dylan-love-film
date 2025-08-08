import Image from "next/image";

export default function About() {
    return (
        // <div className="text-[#3B3B93] flex items-start content-center m-auto ml-[32px] mr-[32px]">
        <div className="text-[#3B3B93] flex justify-end ml-[32px] mr-[32px]">
            <div className="flex flex-col">
                <div className="flex">
                    <Image
                        src={"/IMG_5304.JPEG"}
                        alt="light"
                        width={600}
                        height={200}
                        priority
                        // layout="responsive"
                        // sizes="(max-width: 800px) , 700px"
                    />
                    <div className="flex flex-col w-[600px] ml-[32px]">
                        <div>Dylan Love is a Director of Photography based out of San Francisco, California. He specializes in steadicam and has a passion for capturing breathtaking footage that tells a story. With over 15 years of experience in the industry, Dylan has worked on a variety of projects ranging from commercials to live performances, his work also spans from episodic television to documentaries. Dylan Love Film LLC provides you with the tools and experience to make your video stand out! You can count on him and his team to capture the moment beautifully and with ease. </div>
                        <div className="mt-[48px]">Dylan became fascinated with Steadicam technology while working as a 1st assistant camera in 2010. He would pull focus with his head in a monitor all day for many years in recreation television. At some point he began working with the rig himself. "I love the physicality of steadicam work and I truly feel that the shots that are created with it are unparalleled." Dylan is passionate about creating meaningful media in hopes to generate feelings, empower people, and above all inspire awe. While not working you may find him taking snap shots with his camera phone, flying his drone, or climbing the nearest mountain to gain a different perspective. He wants you to see the beauty that he sees. He would like to offer his eye to the world.</div>
                    </div>
                </div>
                <div className="flex mt-[12px]">
                    <div className="flex">
                        <Image
                            src={"/JKJBE9880.JPG"}
                            alt="light"
                            width={600}
                            height={200}
                            priority
                            className="mr-[12px]"
                        />
                        <Image
                            src={"/DylanMarkRober.PNG"}
                            alt="light"
                            width={500}
                            height={200}
                            priority
                        />
                    </div>
                    <div className="ml-[32px] w-[400px]">
                        <div>"Your videos look great! They are fab- and everyone is happy."</div>
                        <div>-Max Curious Productions</div>
                        <div>"Top notch professional, All about Sony Master++! Smooth on set, very creative. A pleasure to work with as well!"</div>
                        <div>-Sound in Pictures</div>
                        <div>"He's that guy int he camera department you want working for you."</div>
                    </div>
                </div>
            </div>
        </div>
    );
}