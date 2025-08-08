import Video from "./video";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center m-auto h-[600px]">
      {/* <video autoPlay loop muted><source src="/2019_reel (1080p).mp4"/></video> */}
      <Video src="/2019_reel (1080p).mp4"/>
    </div>
  );
}
