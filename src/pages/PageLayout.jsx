import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchProvider } from "../components/SearchContext";
import { ProductsProvider } from "../components/ProductsContext";
const PageLayout = () => {
    return ( 
        <>
        <ProductsProvider>
 <SearchProvider>
 <Header />
       <Outlet/>
      <Footer />
 </SearchProvider>
 </ProductsProvider>{/*contextoproduto*/}
        </>
     );
}
 
export default PageLayout;