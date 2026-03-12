import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      background: "#111",
      color: "white"
    }}>
      <h2>FlashMind</h2>

      <div style={{display:"flex", gap:"20px"}}>
        <a href="#services" style={{color:"white"}}>Services</a>
        <a href="#about" style={{color:"white"}}>Qui sommes-nous</a>
        <a href="#contact" style={{color:"white"}}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;