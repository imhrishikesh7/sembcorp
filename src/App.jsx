import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import CatEnergy from './Pages/CatEnergy'
import Msg from './Pages/Msg'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalysing-energy-transition" element={<CatEnergy/>} />
        <Route path="/chairman-and-managing-directors-message" element={<Msg/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
