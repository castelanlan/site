import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./content.css"

function Content() {
  return (
    <div className="content">
      <Header title="Olá, eu sou o Gabriel!">
        <div class="subtitle">
          <Link to="mailto:castelan@castelan.art.br" class="link">castelan@castelan.art.br →</Link>
          <p class="link">📎</p>
        </div>
      </Header>
      <p>
        Tenho 18 anos e sou de Criciúma - Santa Catarina. <br />
        Sou ficcionado por <Link to="/">tecnologia</Link>, <Link to="/">inovação</Link> e <Link to="/">design</Link>, e no momento
        estou cursando Design (3/8 !).
        <br /> <br />
        Vou ter este espaço na web como um portfólio, com um <Link to="/blog">blog</Link> de relatos/experiências/projetos que fiz,
        e procurar escreveras algo novo no mínimo todo mês!
      </p>
      <h3 id="blog">
        <Link to="/blog">Blog →</Link>
      </h3>
      <p>Acompanhe as publicações para ficar por dentro do que eu ando fazendo</p>
    </div>
  );
}

export default Content