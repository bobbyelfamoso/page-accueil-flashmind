import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import FlashcardDemo from './components/FlashcardDemo';
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Hero />
      <FlashcardDemo />
      <Team />
      <Services />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default App;
