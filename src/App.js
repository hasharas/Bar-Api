import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './component/Header/Navbar';
import Footer from './component/Footer/Footer';
import BrowseCocktails from './pages/BrowsCocktails/BrowseCocktails';
import AzPage from './pages/AzPage/AzPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BrowseCocktails" element={<BrowseCocktails />} />
        <Route path="/letter/:letter" element={<AzPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
