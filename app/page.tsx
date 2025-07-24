export default function Home() {

  const textArr = ["DYLAN", "LOVE", "FILM"];

  return (
    <div className="flex flex-col items-center justify-center m-auto h-full">
      {textArr.map((text, idx) => {
        return (
          <h1 key={idx} className="sm: text-8xl md:text-9xl text-center sm:text-left font-[family-name:var(--font-monoton)]">
            {text}
          </h1>
        )
      })}
    </div>
  );
}
