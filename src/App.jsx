import Header from './components/Header';
import Home from './paginas/Home';
import {Colecao} from './paginas/Home';
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./index.css";

function App() {
  return (
    <div >
      <Header />
      <Home />
      <Colecao />
    </div>
  )
}

export default App
