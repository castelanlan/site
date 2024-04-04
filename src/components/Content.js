import React from "react";
import "./content.css"

function Content() {
  return (
    <div className="content">
      <p>
        Tenho 18 anos e sou de Criciúma - Santa Catarina. <br />
        Sou ficcionado por <a href="/">tecnologia</a>, <a href="/">inovação</a> e <a href="/">design</a>, e no momento
        estou cursando Design (3/8 !).
        <br /> <br />
        Vou ter este espaço na web como um portfólio, com um <a href="#blog">blog</a> de relatos/experiências/projetos que fiz,
        e procurar escreverasdasdas algo novo no mínimo todo mês!
      </p>
      <h3 id="blog">
        <a href="/">⚠️ Em construção</a>
      </h3>
      <p>Este site ainda está em desenvolvimento, acesse mais tarde para acompanhar!</p>
    </div>
  );
}

export default Content