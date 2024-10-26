import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Colecao} from './pages/Home';
import "./index.css";

function App() {
  return (
    <section >
      <Header />
      <Home />
      <Colecao />
      <Footer />
    </section>
  )
}

export default App
