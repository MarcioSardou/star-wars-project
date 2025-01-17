import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {



  return (
      <main className="flex items-center justify-center h-screen w-screen">
       <Greeting />
      </main>
  );
}
