import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <main>
          <Header />
          <Content />
          <Cards />
          <Footer />
        </main>
      </body>
    </div>
  );
}

export default App;