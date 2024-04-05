import React from "react";
import Header from "./Header";
import "./content.css"

function Content() {
  return (
    <div className="content">
      <Header title="Olá, eu sou o Gabriel!">
        <div class="subtitle">
          <a href="mailto:castelan@castelan.art.br" class="link">castelan@castelan.art.br →</a>
          <p class="link">📎</p>
        </div>
      </Header>
      <p>
        Tenho 18 anos e sou de Criciúma - Santa Catarina. <br />
        Sou ficcionado por <a href="/">tecnologia</a>, <a href="/">inovação</a> e <a href="/">design</a>, e no momento
        estou cursando Design (3/8 !).
        <br /> <br />
        Vou ter este espaço na web como um portfólio, com um <a href="#blog">blog</a> de relatos/experiências/projetos que fiz,
        e procurar escreverasdasdas algo novo no mínimo todo mês!
      </p>
      <h3 id="blog">
        <a href="/blog">Blog →</a>
      </h3>
      <p>Acompanhe as publicações para ficar por dentro do que eu ando fazendo</p>
    </div>
  );
}

export default Content