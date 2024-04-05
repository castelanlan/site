import React from "react";
import Header from './Header';

import './contato.css'

function Contato() {
  return (
    <div className="contato">
      <Header title="Contato">
        <div>
            <p>Entre em contato diretamente preenchendo este formulário!</p>
        </div>
      </Header>
    </div>
  );
}

export default Contato