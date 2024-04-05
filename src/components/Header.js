import React from "react";
import "./header.css"

function Header(props) {
  return (
    <div className="header">
      {/* <h1>Olá, eu sou o Gabriel!</h1> */}
      <h1>{props.title}</h1>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Header