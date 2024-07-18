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

function App() {
  return (
    <>
      <GlobalStyle/>
        <BrowserRouter>
          <MenuProvider>
            <Layout>
              <Header/>
            </Layout>
            <MenuBurger/>
          </MenuProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="ProductsPage" element={<ProdPage/>}/>
            <Route path="AboutPage" element={<AboutPage/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
          <Layout>
            <Footer/>
          </Layout>
        </BrowserRouter>
    </>
      
  )
}
export default App
