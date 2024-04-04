import React from "react";
import livro from './../static/livro.svg';
import coracao from './../static/coracao.svg';
import "./cards.css"

function Cards() {
  return (
      <div class="card-wrapper">
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
        </div>
      </div>
  );
}

export default Cards