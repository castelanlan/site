import React from "react";
import { Link } from "react-router-dom";

import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <span>
        <Link to="/" className="link">Home</Link>  •
        {/* <Link to="/contato" className="link">Contato</Link>  • */}
        <Link to="/sociais" className="link">Sociais</Link>  •
        <Link to="/blog" className="link">Blog</Link></span>
    </div>
  );
}

export default Footer