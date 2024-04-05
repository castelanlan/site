import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Blog from './components/blog/Blog';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function Hero() {
  return(
    <div>
        <Header />
        <Content />
        <Cards />
    </div>
  )
}

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Hero />} exact />
        <Route path="/card" element={<Hero />} exact />
        <Route path="/blog" element={<Blog />} exact />
      </Routes>
      <Footer />
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <body>
        <Main />
      </body>
    </div>
  );
}

export default App;