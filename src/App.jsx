import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<div>About</div>} /> */}
        {/* <Route path="/contact" element={<div>Contact</div>} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
