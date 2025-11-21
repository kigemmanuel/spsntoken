import snapp from "../src/snapp.js"
import About from "./sections/About.jsx"
import Footer from "./sections/Footer.jsx"
import Hero from "./sections/Hero.jsx"
import HowToBuy from "./sections/HowToBuy.jsx"
import Tokenomics from "./sections/Tokenomics.jsx"
import Nav from "./sections/Nav.jsx"

const Home = () => {
  return (<>
    <header>
      <Nav />
    </header>
    <main>
      <Hero />
      <HowToBuy />
      <Tokenomics />
      <About />
      <Footer />
    </main>
  </>);
}

const SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, Home(), "replace")