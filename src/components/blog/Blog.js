import React from "react";
import Header from "../Header";

import './blog.css'

function Blog() {
  return (
    <div className="blog">
      <Header title="Blog">
        <div className="subtitle">
          <p>Aqui você vê meus últimos posts</p>
        </div>
      </Header>
    </div>
  );
}

export default Blog