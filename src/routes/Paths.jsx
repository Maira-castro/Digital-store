import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProductListing from "../components/ProductList";
import PageLayout from "../pages/PageLayout";
import Home, { Colecao } from "../pages/Home";
import Banner from "../components/BannerPublicidade";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../components/ProductViewPage";
import FormularioCadastro from "../components/FormularioCadastro";
import Login from "../components/Login";


const MainPage = () => {
    return (
        <>
        <Home />
      <Colecao />
      <Banner />
        </>
    );
};
const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageLayout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="/products" element={<ProductListingPage/>}/>
            <Route path="/product/:id" element={<ProductViewPage/>} />
            <Route path="/cadastro" element={<FormularioCadastro/>} />
            <Route path="/login" element={<Login/>} />
            </Route>
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Paths;