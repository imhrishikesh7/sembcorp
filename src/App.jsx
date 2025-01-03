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
import Building from './Pages/Building'
import BoardOfDir2 from './Pages/BoardOfDir2'
import BoardOfDir3 from './Pages/BoardOfDir3'
import BoardOfDir1 from './Pages/BoardOfDir1'
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
        <Route path="/building-an-empowered-talent-pool" element={<Building/>} />
        <Route path="/appakudal-nithyanand" element={<BoardOfDir2/>} />
        <Route path="/nuraliza-osman" element={<BoardOfDir3/>} />
        <Route path="/vipul-tuli" element={<BoardOfDir1/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
