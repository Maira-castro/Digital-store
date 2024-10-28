import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Colecao} from './pages/Home';
import Banner from './components/BannerPublicidade';
import "./index.css";

function App() {
  return (
    <section >
      <Header />
      <Home />
      <Colecao />
      <Banner />
      <Footer />
    </section>
  )
}

export default App
