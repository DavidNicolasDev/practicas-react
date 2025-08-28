
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home.jsx";
import { RellenarModelo } from "./pages/RellenarModelo.jsx";


export default function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rellenar-modelo" element={<RellenarModelo />} />
      </Routes>
    </Router>
  )
}

