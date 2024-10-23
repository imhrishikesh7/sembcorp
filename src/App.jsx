import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import CatEnergy from './Pages/CatEnergy'
import Msg from './Pages/Msg'
import BoardOfDir from './Pages/BoardOfDir'
import Mapping from './Pages/Mapping'
import Accelarating from './Pages/Accelarating'
import Driving from './Pages/Driving'
import Mergers from './Pages/Mergers'
import CaseStudies from './Pages/CaseStudies'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalysing-energy-transition" element={<CatEnergy/>} />
        <Route path="/chairman-and-managing-directors-message" element={<Msg/>} />
        <Route path="/profile-of-the-board-of-directors" element={<BoardOfDir/>} />
        <Route path="/mapping-our-progress" element={<Mapping/>} />
        <Route path="/accelerating-cleaner-energy-adoption-in-india" element={<Accelarating/>} />
        <Route path="/driving-brown-to-green-transition" element={<Driving/>} />
        <Route path="/mergers-and-acquisitions" element={<Mergers/>} />
        <Route path="/case-studies" element={<CaseStudies/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
