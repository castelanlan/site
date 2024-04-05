import React from "react";

import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <span><a href="/" class="link">Home →</a> • <a href="/contato" class="link">Contato →</a> • <a href="/sociais" class="link">Sociais →</a></span>
    </div>
  );
}

export default Footer