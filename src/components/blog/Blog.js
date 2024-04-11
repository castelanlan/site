import React from "react";
import Header, { BlogHeading } from "../Header";
import Card from "../Cards";
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
        <h1>2024</h1>
        <div className="left">
          <Card title="React" desc="Alguns projetos meus em React" assunto="Programação" link="/blog/react" />
        </div>
      </div>
    );
  } else if (title === "react") {
    fetch(tecnologia).then(res => res.text()).then(text => setTexto(text));

    return (
      <div className="blog">
        <Markdown
          children={texto}
          options={{
            overrides: {
              h1: {
                component: BlogHeading,
              },
              h2: {
                props: {
                  className: "blog-h2"
                }
              }
            },
          }
          }
        />
      </div>
    );
  } else if (title === 'titulo-2') {
    return (<><p>Título 2</p></>)
  } else if (title === 'titulo-3') {
    return (<><p>Título 3</p></>)
  } else {
    console.log(title)
    return (<div className="blog">
      <Header title="404." />
      <p>Parece que eu ainda não fiz um post sobre "{title}".</p>
    </div>)
  }
}

export default Blog