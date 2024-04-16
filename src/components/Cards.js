import React from "react";
import { useNavigate } from "react-router-dom";
import livro from './../static/livro.svg';
import coracao from './../static/coracao.svg';
import "./cards.css"

function Card(props) {
  let navigate = useNavigate();

  const handleClick = () => {
    if (props.link && typeof props.link === 'string') {
      navigate(props.link); // Use the link prop for navigation
    } else {
      console.warn('Card: Missing or invalid link prop. Navigation disabled.');
    }
  };
  return (

    <div className="card" onClick={handleClick}>
      <div className="card-title">
        <div className="card-title-title">
          <img src={livro} alt="Ícone de coração" />
          <h6>{props.title}</h6>
        </div>
        <p>{props.date}</p>
      </div>
      <div className="card-text">
        <p>{props.desc}</p>
      </div>
      <div className="card-footer">
        <div className="card-theme">
          <img src="" alt="" />
          <p>{props.assunto}</p>
        </div>
        <img src={coracao} alt="Ícone de coração" />
      </div>
    </div>
  )
}

function Cards() {
  return (
    <div className="card-wrapper">
      <Card title="React" desc="Meus projetos em React" assunto="Programação" date="08/04/2024" link="/blog/react" />
      <Card title="Startup Weekend 2024" desc="Minha experiência com o Startup Weekend 2024" assunto="Inovação" date="16/04/2024" link="/blog/sw" />
    </div>
  );
}

export default Cards