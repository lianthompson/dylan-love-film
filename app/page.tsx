export default function Home() {

  const textArr = ["DYLAN", "LOVE", "FILM"];

  return (
    <main className="flex flex-col items-center content-center m-auto">
      {textArr.map((text, idx) => {
        return (
          <h1 key={idx} className="sm: text-8xl md:text-9xl text-center sm:text-left font-[family-name:var(--font-monoton)]">
            {text}
          </h1>
        )
      })}
    </main>
  );
}
