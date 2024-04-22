import Content from './components/Content';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Sociais from './components/Sociais';
import Blog from './components/blog/Blog';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function Hero() {
  return(
    <div>
        <Content />
        <Cards />
    </div>
  );
}

function Main() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<Hero />} exact />
        <Route path="/blog" element={<Blog />} exact />
        <Route path="/blog/:title" element={<Blog />} exact />
        <Route path="/sociais" element={<Sociais />} exact />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div className="App">
        <Main />
        <Footer />
    </div>
  );
}

export default App;