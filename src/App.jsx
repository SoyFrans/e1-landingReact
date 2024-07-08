import Header from "./assets/components/Header/Header"
import About from "./assets/components/About/About"
import Hero from "./assets/components/Hero/Hero"
import Productos from "./assets/components/Productos/Productos"
import Footer from "./assets/components/Footer/Footer"
import GlobalStyle from "./assets/Style/Globalstyle"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <About/>
      <Productos/>
      <Footer/>
    </>
  )
}
export default App
