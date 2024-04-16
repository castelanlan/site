import React, { useEffect } from "react";
import Header, { BlogHeading } from "../Header";
import Cards from "../Cards";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import './blog.css';

function Blog() {
  const { title } = useParams();
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const fetchPostContent = async () => {
      if (title) {
        try {
          const data = await import("../../static/posts/" + title + ".md"); // https://github.com/webpack/webpack/issues/6680#issuecomment-370800037 // Front end resumido em um issue
          fetch(data.default).then(r => r.text()).then(r => setTexto(r));

        } catch (error) {
          console.error(`Erro carregando conteúdo para ${title}:\n`, error);
          setTexto(
            `<div className="blog">
              # 404.
              <p>Parece que eu ainda não escrevi o post "${title}".</p>
            </div>`
          );
        }
      }
    };

    fetchPostContent();
  }, [title]);

  return (
    <div className="blog">
      {title === undefined ? ( // .art.br/blog/
        <div>
          <Header title="Blog" />
          <p>Aqui você vê meus últimos posts</p>
          <h1>2024</h1>
          <Cards />
        </div>
      ) : (
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
            }
          }
        }
        />
      )
      }
    </div>
  );
}

export default Blog