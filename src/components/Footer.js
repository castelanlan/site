import React from "react";
import { Link } from "react-router-dom";

import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <span>
        <Link to="/" class="link">Home</Link>  •
        {/* <Link to="/contato" class="link">Contato</Link>  • */}
        <Link to="/sociais" class="link">Sociais</Link>  •
        <Link to="/blog" class="link">Blog</Link></span>
    </div>
  );
}

export default Footer