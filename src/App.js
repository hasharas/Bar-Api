import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './component/Header/Navbar';
import Footer from './component/Footer/Footer';
import BrowseCocktails from './pages/BrowsCocktails/BrowseCocktails';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BrowseCocktails" element={<BrowseCocktails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
