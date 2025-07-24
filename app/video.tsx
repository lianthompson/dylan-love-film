
interface VideoProps {
    src: string,
    poster: string
}

export default function Video({src, poster}: VideoProps) {
  return (
    // <div className="m-[20px] max-w-none">
    // <video width="320" height="240" className="m-[20px] max-w-none" controls preload="none">
    <video width="600" height="540" className="m-[20px] max-w-none" controls preload="none" poster={poster}>
      <source src={src} type="video/mp4" />
      {/* <source src="dummyVid1.mp4" type="video/mp4" /> */}
      <track
        src={src}
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
    // </div>
  )
}