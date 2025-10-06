import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/Hero";
import Cocktails from "./componenets/Cocktails";
import About from "./componenets/About";
import Art from "./componenets/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}

export default App;
