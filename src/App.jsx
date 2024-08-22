import Header from "./assets/components/Header/Header"
import Footer from "./assets/components/Footer/Footer"
import GlobalStyle from "./assets/Style/Globalstyle"
import Layout from "./assets/components/Layout/Layout"
import Contact from "./assets/components/Pages/Contact/Contact"
import AboutPage from "./assets/components/Pages/AboutPage/AboutPage"
import ProdPage from "./assets/components/Pages/ProductsPage/ProductsPage"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MenuBurger from "./assets/components/Header/MenuBurger/MenuBurger"
import MenuProvider from "./assets/components/Header/MenuBurger/functionburger"
import MenuShopProvider from "./assets/components/Header/ShopList/functionshoplist"
import ShopList from "./assets/components/Header/ShopList/ShopList"

function App() {
  return (
    <>
      <GlobalStyle/>
        <BrowserRouter>
          <MenuShopProvider>
            <MenuProvider>
              <Layout>
              <Header/>
              </Layout>
              <MenuBurger/>
              <ShopList/>
            </MenuProvider>
          </MenuShopProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="ProductsPage" element={<ProdPage/>}/>
            <Route path="AboutPage" element={<AboutPage/>}/>
          </Routes>
          <Layout>
            <Footer/>
          </Layout>
        </BrowserRouter>
    </>
      
  )
}
export default App
