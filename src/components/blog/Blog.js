import React from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";

import './blog.css'

function Blog() {
  const { title } = useParams();
  if (title == 0) {
    return (
      <div className="blog">
        <Header title="Blog" />
        <p>Aqui você vê meus últimos posts</p>
      </div>
    );
  } else if (title === 'titulo-1') {
    return (<><p>Título 1</p></>)
  } else if (title === 'titulo-2') {
    return (<><p>Título 2</p></>)
  } else if (title === 'titulo-3') {
    return (<><p>Título 3</p></>)
  } else {
    return (<><p>Não encontrei o card "{ title }"</p></>)
  }
}

export default Blog