
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Porifolio from './components/Porifolio'
import PreFooter from './components/PreFooter'
import Service from './components/Service'
import FloatingButtons from './components/ZapButton'
function App() {


  return (
    <div>
     <Header />
     <HeroSection />
     <About />
     <PreFooter />
     <Porifolio />
     <Service />
     <Contact />
     <FloatingButtons />
     <Footer />
    </div>
  )
}

export default App
