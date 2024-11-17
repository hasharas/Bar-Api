import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './component/Header/Navbar';
import Footer from './component/Footer/Footer';
import BrowseCocktails from './pages/BrowsCocktails/BrowseCocktails';
import AzPage from './pages/AzPage/AzPage';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import RandomIngredientDetails from './pages/RandomIngredientDetails/RandomIngredientDetails';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {<Route path="/Browse-Cocktails" element={<BrowseCocktails />} />}
            <Route path="/Browse-Cocktails/tag/:strTags" element={<BrowseCocktails />} />
            <Route path="/letter/:letter" element={<AzPage />} />
            {/* Updated path to include both id and name */}
            <Route path="/cocktail/:id" element={<ItemDetails />} />
            <Route path="/ingredient/:ingredientId" element={<RandomIngredientDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



