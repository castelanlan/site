import React from "react";
import Header from './Header';

import './sociais.css'

function Sociais() {
  return (
    <div className="sociais">
      <Header title="Sociais">
        <div>
          <p>Redes sociais</p>
        </div>
      </Header>
      <div className="sociais-links">
        <p><a className="link" href="https://www.instagram.com/gabrielmcastelan/">Instagram @gabrielmcastelan</a></p>
        <p><a className="link" href="https://twitter.com/castelanches">Twitter @castelanches</a></p>
        <p><a className="link" href="https://github.com/castelanlan">Github /castelanlan</a></p>
        <p><a className="link" href="mailto:castelan@castelan.art.br">E-mail: castelan@castelan.art.br</a></p>
        <p><a className="link" href="mailto:gabriel@castelan.art.br">E-mail: gabriel@castelan.art.br</a></p>
      </div>
    </div>
  );
}

export default Sociais