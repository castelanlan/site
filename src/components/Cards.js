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
        <img src={livro} alt="Ícone de coração" />
        <h6>{props.title}</h6>
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
      <Card title="React" desc="Meus projetos em React" assunto="Programação" link="/blog/react"/>
      {/* <Card title="Título 2" desc="Descrição 2" assunto="Programação" link="/blog/titulo-2"/> */}
      {/* <Card title="Título 3" desc="Descrição 3" assunto="Programação" link="/blog/titulo-3"/> */}
      {/* <div className="card">
          <div className="card-title">
            <img src={livro} alt="" />
            <h6>Título do card</h6>
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div className="card-footer">
            <div className="card-theme">
              <img src="" alt="" />
              <p>Assunto do card</p>
            </div>
            <img src={coracao} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <img src={livro} alt="" />
            <h6>Teste do commit</h6>
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div className="card-footer">
            <div className="card-theme">
              <img src="" alt="" />
              <p>Assunto do card</p>
            </div>
            <img src={coracao} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <img src={livro} alt="" />
            <h6>Título do card</h6>
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div className="card-footer">
            <div className="card-theme">
              <img src="" alt="" />
              <p>Assunto do card</p>
            </div>
            <img src={coracao} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <img src={livro} alt="" />
            <h6>Título do card</h6>
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div className="card-footer">
            <div className="card-theme">
              <img src="" alt="" />
              <p>Assunto do card</p>
            </div>
            <img src={coracao} alt="" />
          </div>
        </div> */}
    </div>
  );
}

export default Cards