import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProductListing from "../components/ProductList";
import PageLayout from "../pages/PageLayout";
import Home, { Colecao } from "../pages/Home";
import Banner from "../components/BannerPublicidade";
import ProductListingPage from "../pages/ProductListingPage";

import ProductViewPage from "../components/ProductViewPage";
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
            </Route>
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Paths;