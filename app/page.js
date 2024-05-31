import Image from "next/image";
import Hero from "./components/hero";
import Drop from "./components/drop";
import Abt from "./components/abt"
import Play from "./components/play";
import Img from "./components/img";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero/>
    <Drop/>
    <Abt/>
    <Play/>
    <Img />
    <Footer/>
   </main>
  );
}
