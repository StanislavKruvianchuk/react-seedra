import './App.css';
import './application.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );


}

export default App;
