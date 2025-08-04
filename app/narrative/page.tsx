import Video from "../video";
import { narrativeSrcs } from "../constants/constants";

export default function Home() {
  return (
    <div className="flex items-center content-center justify-center overscroll-auto mt-[264px] md:max-lg:border border-solid border-red-500 m-auto">
      <div className="flex flex-wrap justify-center">
        {Object.values(narrativeSrcs).map((src, idx) => {
           return <Video key={idx} src={`/${src}`}></Video>
        })}
      </div>
    </div>
  );
}