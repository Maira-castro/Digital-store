import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchProvider } from "../components/SearchContext";
const PageLayout = () => {
    return ( 
        <>
 <SearchProvider>
 <Header />
       <Outlet/>
      <Footer />
 </SearchProvider>
        </>
     );
}
 
export default PageLayout;