import React from "react";
import "./header.css"

function Header() {
  return (
    <div className="header">
      <h1>Olá, eu sou o Gabriel!</h1>
      <div class="subtitle">
        <a href="mailto:castelan@castelan.art.br" class="link">castelan@castelan.art.br →</a>
        <p class="link">📎</p>
      </div>
    </div>
  );
}

export default Header