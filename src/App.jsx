import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import FlashcardDemo from './components/FlashcardDemo';

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

export default App;
