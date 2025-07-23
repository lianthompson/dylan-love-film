import Video from "../video";

export default function VideoPage() {
  return (
    <main className="flex flex-row flex-wrap">
      <Video src={"SF-TRAVEL-BELIEVE-LEISURE-V26-H264.mp4"} poster={"lens.svg"}/>
      <Video src={"Spirited Awards The Buena Vista.mp4" } poster={"lens.svg"}/>
      <Video src={"What is Covered California.mp4"} poster={"lens.svg"}/>
      {/* <Video src={"dummyVid4.mp4"} poster="lens.svg"/>
      <Video src={"dummyVid1.mp4"} poster="lens.svg"/>
      <Video src={"dummyVid2.mp4"} poster="lens.svg"/>
      <Video src={"dummyVid3.mp4"} poster="lens.svg"/>
      <Video src={"dummyVid4.mp4"} poster="lens.svg"/> */}
    </main>
  );
}