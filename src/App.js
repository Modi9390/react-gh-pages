
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import About from './components/About';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
