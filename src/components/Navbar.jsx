import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#about">Qui sommes-nous</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-toggle">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;