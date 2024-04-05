import React from "react";
import livro from './../static/livro.svg';
import coracao from './../static/coracao.svg';
import "./cards.css"

function Card(props) {
  return (
    <div class="card">
      <div class="card-title">
        <img src={livro} alt="" />
        <h6>{props.title}</h6>
      </div>
      <div class="card-text">
        <p>{props.desc}</p>
      </div>
      <div class="card-footer">
        <div class="card-theme">
          <img src="" alt="" />
          <p>Assunto do card</p>
        </div>
        <img src={coracao} alt="" />
      </div>
    </div>
  )
}

function Cards() {
  return (
    <div class="card-wrapper">
      <Card title="Título 1" desc="Descrição 1" assunto="Programação"/>
      <Card title="Título 2" desc="Descrição 2" assunto="Programação"/>
      <Card title="Título 3" desc="Descrição 3" assunto="Programação"/>
      {/* <div class="card">
          <div class="card-title">
            <img src={livro} alt="" />
            <h6>Título do card</h6>
          </div>
          <div class="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div class="card-footer">
            <div class="card-theme">
              <img src="" alt="" />
              <p>Assunto do card</p>
            </div>
            <img src={coracao} alt="" />
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <img src={livro} alt="" />
            <h6>Teste do commit</h6>
          </div>
          <div class="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div class="card-footer">
            <div class="card-theme">
              <img src="" alt="" />
              <p>Assunto do card</p>
            </div>
            <img src={coracao} alt="" />
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <img src={livro} alt="" />
            <h6>Título do card</h6>
          </div>
          <div class="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div class="card-footer">
            <div class="card-theme">
              <img src="" alt="" />
              <p>Assunto do card</p>
            </div>
            <img src={coracao} alt="" />
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <img src={livro} alt="" />
            <h6>Título do card</h6>
          </div>
          <div class="card-text">
            <p>Lorem ipsum dolor sit amet, ipsum dolor sit ameti psum dolor sit ametip sum dolor sit ameti psum dolor sit ame tipsum dolor sit amet</p>
          </div>
          <div class="card-footer">
            <div class="card-theme">
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