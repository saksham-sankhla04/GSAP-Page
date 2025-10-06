import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Cocktails from "./componenets/Cocktails";
import About from "./componenets/About";
import Art from "./componenets/Art";
import Menu from "./componenets/Menu";
import Contact from "./componenets/Contact";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}

export default App;
