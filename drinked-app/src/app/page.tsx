import Image from "next/image";

export default function Home() {
  return (
    <div className="midbar min-h-screen text-center">
      <main className="col-start-2">
        <h1 className="text-4xl pt-4 pb-4">Welcome to Drinked</h1>
        <p className="text-lg">
        Become conscious about your alcohol consumption. Easily track your units drank and money spent. Features to help you quit drinking.
        </p>
        <div className="grid grid-cols-2">
        <Image
          className="justify-self-center"
          src="/drink_animation.gif"
          alt="Drinked"
          width={400}
          height={400}
        />
        <div className="flex items-center justify-center">
          <button className="rounded-full p-6 bg-blue-200">Find out more</button>
        </div>
        </div>
      </main>
    </div>
  );
}
