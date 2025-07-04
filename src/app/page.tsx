import About from "./components/About";
import Categorys from "./components/Categori";
import CTA from "./components/CTA";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import NewsLetter from "./components/NewsLetter";
import SuccessStorys from "./components/SuccessStorys";



export default function Home() {
  return (
   <main>
    <Hero/>
    <About/>
    <Categorys/>
    <Impact/>
    <SuccessStorys/>
    <CTA/>
    <Events/>
    <FAQ/>
    <NewsLetter/>
   </main>
  );
}
