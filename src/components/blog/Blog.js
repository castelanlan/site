import React from "react";
import Header, { BlogHeader } from "../Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import tecnologia from "../../static/posts/tecnologia.md"

import './blog.css'

function Blog() {
  const { title } = useParams();
  const [texto, setTexto] = useState('');
  
  if (title === undefined) {
    return (
      <div className="blog">
        <Header title="Blog" />
        <p>Aqui você vê meus últimos posts</p>
      </div>
    );
  } else if (title === "titulo-1") {
    fetch(tecnologia).then(res => res.text()).then(text => setTexto(text));

    return (<Markdown
                options={{
                  overrides: {
                    h1: {
                      component: BlogHeader,
                      props: {
                        className: 'header',
                        title: 'Título'
                      },
                    },
                  },
                }}
    >{ texto }</Markdown>);
  } else if (title === 'titulo-2') {
    return (<><p>Título 2</p></>)
  } else if (title === 'titulo-3') {
    return (<><p>Título 3</p></>)
  } else {
    console.log(title)
    return (<div className="blog">
    <Header title="404." />
    <p>Parece que eu ainda não fiz um post sobre "{ title }".</p>
  </div>)
  }
}

export default Blog