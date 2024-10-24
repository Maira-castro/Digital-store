import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Colecao} from './pages/Home';
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./index.css";
import Banner from './components/BannerPublicidade'


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
